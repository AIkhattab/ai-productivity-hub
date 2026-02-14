# deploy.ps1
# Automating GitHub and Vercel Deployment for ai-productivity-hub

Write-Host "Starting deployment process..." -ForegroundColor Cyan

# Ensure npm and gh are in Path (temporary)
$env:Path += ";C:\Program Files\nodejs;C:\Program Files\GitHub CLI"

# Check dependencies
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "GitHub CLI (gh) not found in PATH. Please ensure it is installed." -ForegroundColor Red
    exit 1
}
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "Node.js (npm) not found in PATH. Please ensure it is installed." -ForegroundColor Red
    exit 1
}

# 1. Authenticate GitHub
Write-Host "`nchecking GitHub authentication..." -ForegroundColor Yellow
if (-not (gh auth status)) {
    Write-Host "Please login to GitHub in the browser window that opens..." -ForegroundColor Yellow
    gh auth login --web -h github.com
}

# 2. Authenticate Vercel
Write-Host "`nchecking Vercel authentication..." -ForegroundColor Yellow
& "C:\Program Files\nodejs\npx.cmd" vercel whoami > $null 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Please login to Vercel..." -ForegroundColor Yellow
    & "C:\Program Files\nodejs\npx.cmd" vercel login
}

# 3. Create GitHub Repository
Write-Host "`nCreating GitHub Repository..." -ForegroundColor Yellow
# Check if repo exists locally
git remote get-url origin > $null 2>&1
if ($LASTEXITCODE -ne 0) {
    gh repo create ai-productivity-hub --public --source=. --remote=origin --push
    Write-Host "Repository created and pushed successfully!" -ForegroundColor Green
} else {
    Write-Host "Remote origin already exists. Pushing changes..."
    git push -u origin master
}

# 4. Deploy to Vercel
Write-Host "`nDeploying to Vercel..." -ForegroundColor Yellow
& "C:\Program Files\nodejs\npx.cmd" vercel --prod

Write-Host "`nDeployment Complete! Check the links above." -ForegroundColor Cyan
