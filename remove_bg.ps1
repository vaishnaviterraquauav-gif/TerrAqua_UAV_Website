Add-Type -AssemblyName System.Drawing

$files = @("startupindialogo.png", "upstartuplogo.png")

foreach ($filename in $files) {
    $filePath = "C:\Users\Admin\Downloads\TerrAqua_Website\public\" + $filename
    $tempPath = "C:\Users\Admin\Downloads\TerrAqua_Website\public\temp_" + $filename
    
    $bytes = [System.IO.File]::ReadAllBytes($filePath)
    $ms = New-Object System.IO.MemoryStream($bytes, 0, $bytes.Length)
    $bmp = [System.Drawing.Image]::FromStream($ms)
    
    $newBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        for ($y = 0; $y -lt $bmp.Height; $y++) {
            $c = $bmp.GetPixel($x, $y)
            # Check if pixel is white / near-white
            if ($c.R -ge 225 -and $c.G -ge 225 -and $c.B -ge 225) {
                $newBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
            } else {
                $newBmp.SetPixel($x, $y, $c)
            }
        }
    }
    
    $bmp.Dispose()
    $ms.Dispose()
    
    $newBmp.Save($filePath, [System.Drawing.Imaging.ImageFormat]::Png)
    $newBmp.Dispose()
    Write-Host "Successfully converted $filename to transparent graphic"
}
