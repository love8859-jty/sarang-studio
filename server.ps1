# 사랑이야기스튜디오 홈페이지 — 내 컴퓨터에서 확인용 간이 서버
# '홈페이지_실행.bat' 을 더블클릭하면 이 파일이 실행됩니다. 창을 닫으면 서버가 꺼집니다.
param([int]$Port = 8080)
$Root = $PSScriptRoot
$types = @{ ".html"="text/html; charset=utf-8"; ".css"="text/css; charset=utf-8"; ".js"="application/javascript; charset=utf-8"; ".jpg"="image/jpeg"; ".jpeg"="image/jpeg"; ".png"="image/png"; ".svg"="image/svg+xml"; ".webp"="image/webp"; ".md"="text/plain; charset=utf-8" }
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$Port/")
$l.Start()
Write-Host ""
Write-Host "  사랑이야기스튜디오 홈페이지가 실행 중입니다."
Write-Host "  주소: http://localhost:$Port/"
Write-Host "  (이 창을 닫으면 종료됩니다)"
Write-Host ""
while ($l.IsListening) {
  $ctx = $l.GetContext()
  try {
    $path = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
    if ($path -eq "") { $path = "index.html" }
    $file = [IO.Path]::GetFullPath((Join-Path $Root $path))
    if ($file.StartsWith($Root) -and (Test-Path $file -PathType Leaf)) {
      $bytes = [IO.File]::ReadAllBytes($file)
      $ext = [IO.Path]::GetExtension($file).ToLower()
      $ctx.Response.ContentType = $(if ($types[$ext]) { $types[$ext] } else { "application/octet-stream" })
      $ctx.Response.Headers.Add("Cache-Control", "no-cache")   # 수정한 내용이 새로고침하면 바로 보이도록
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else { $ctx.Response.StatusCode = 404 }
  } catch { $ctx.Response.StatusCode = 500 }
  $ctx.Response.Close()
}
