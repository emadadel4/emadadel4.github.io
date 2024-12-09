function itt {
    param (
        [string]$GitHubLink
    )
    irm $GitHubLink | iex
}

# تشغيل الوظيفة
itt -GitHubLink "https://raw.githubusercontent.com/emadadel4/itt/refs/heads/main/itt.ps1"
