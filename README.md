# Your Name — Personal Site

A single-page resume/portfolio site, built with plain HTML, CSS, and a
touch of JS — no build tools, frameworks, or dependencies. Free to host
on GitHub Pages.

## 1. Customize the content

Open `index.html` and replace the placeholder text:

- Your name, title, and bio (top of the file, in the `sidebar`)
- Email, GitHub, and LinkedIn links (`contact-list`)
- About section
- Experience timeline (dates, job titles, companies, descriptions)
- Projects (names, links, descriptions)
- Skills list

Colors and fonts live in `style.css` under `:root` at the top of the file,
if you want to adjust the palette.

## 2. Preview it locally

Just open `index.html` in a browser — no server needed. Or, for a local
server with live reload, run this from the project folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 3. Put it on GitHub

1. Create a new **public** repository on GitHub.
   - Name it `yourusername.github.io` (replacing `yourusername` with your
     actual GitHub username) if you want the site at the root domain
     `https://yourusername.github.io`.
   - Any other name works too — the site will just live at
     `https://yourusername.github.io/repo-name` instead.
2. Push these files to the repository:

   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/yourusername/REPO_NAME.git
   git push -u origin main
   ```

## 4. Turn on GitHub Pages

1. On GitHub, go to your repo → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. Wait a minute or two — GitHub will give you a live URL at the top of
   that page (`https://yourusername.github.io/...`).

That's it — the site is live and free. Any time you push new commits to
`main`, GitHub Pages redeploys automatically.

## Optional: custom domain

If you own a domain, add a `CNAME` file to the repo root containing just
your domain name (e.g. `yourname.com`), then point your domain's DNS at
GitHub Pages following
[GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
