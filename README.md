# Jiacheng Huang · 学术个人主页

主页地址：**https://ye111ow.github.io/**

这是部署到 GitHub Pages 的纯静态学术主页，参考并修改了 [Minimal Light](https://github.com/yaoyao-liu/minimal-light) 的 HTML 布局。无需安装 Node、Ruby 或 Jekyll，主要内容直接写在 `index.html` 中，关闭 JavaScript 也能读取姓名、学校、邮箱和教育背景。字体、样式、图标均使用本地或系统资源。

## 已填写的信息

- 姓名：Jiacheng Huang
- 身份：Undergraduate student
- 单位：School of Computer Science and Technology, China University of Mining and Technology
- 地点：Xuzhou, China
- 邮箱：08242694@cumt.edu.cn
- GitHub：https://github.com/Ye111ow

姓名、身份、学校及邮箱来自本人提供的信息。研究方向、论文、项目、导师、学位名称和入学年份尚未提供，因此页面没有填写这些内容。

## 用于 OpenReview 注册

在 OpenReview 的 **Homepage** 中填写 `https://ye111ow.github.io/`，不要填 GitHub 仓库地址。

根据 [OpenReview 注册说明](https://docs.openreview.net/getting-started/creating-an-openreview-profile/signing-up-for-openreview)，有效主页应能看到姓名、单位及用于注册的邮箱。当前页面公开展示以上三项；注册姓名使用 **Jiacheng Huang**，邮箱使用 **08242694@cumt.edu.cn**，并完成 OpenReview 的邮件验证。页面上线与 OpenReview 账户审核是两个独立步骤。

## GitHub Pages 设置

仓库为 `Ye111ow/Ye111ow.github.io`。发布源使用：

1. 打开仓库 **Settings → Pages**。
2. Source 选择 **Deploy from a branch**。
3. Branch 选择 **main**，文件夹选择 **/(root)**，保存。
4. 等待 GitHub Pages 部署完成后访问主页。

根目录的 `.nojekyll` 告诉 GitHub 直接发布静态文件。后续向 `main` 推送修改会触发重新部署。参见 [GitHub 官方发布源说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 文件说明

| 文件 | 用途 |
| --- | --- |
| `index.html` | 姓名、简介、教育背景、邮箱及搜索引擎元信息 |
| `assets/css/style.css` | 电脑、手机和打印样式 |
| `assets/js/main.js` | 复制邮箱、导航状态；不影响正文展示 |
| `assets/favicon.svg` | JH 网站图标 |
| `404.html` | 不存在的地址提示 |
| `robots.txt` / `sitemap.xml` | 搜索引擎抓取信息 |
| `THIRD_PARTY_NOTICES.md` | 模板来源、版本及许可说明 |

## 日常修改

最方便的方法是在 GitHub 打开 `index.html`，点击铅笔图标编辑并提交到 `main`。

- 修改简介：搜索 `<!-- ABOUT`，编辑下面的文字。
- 修改教育：搜索 `<!-- EDUCATION`。确定入学年份、专业和学位后再补充。
- 修改邮箱：全文搜索旧邮箱，统一替换正文、`mailto:`、`data-copy-email` 与 JSON-LD 中的值。
- 添加照片：将照片保存为 `assets/profile.jpg`，用 `<img class="portrait" src="assets/profile.jpg" alt="Jiacheng Huang" width="160" height="160">` 替换整个 `.monogram` 元素，并在 CSS 添加 `.portrait { width: 160px; height: 160px; object-fit: cover; border-radius: 50%; margin: 41px 0 26px; }`；手机媒体查询中设置对应的 90px 尺寸与网格位置。
- 更新日期：同步修改页脚 `<time>` 的日期和文字，以及 `sitemap.xml` 的 `<lastmod>`。
- 添加 Scholar、ORCID、OpenReview 或 CV：有自己的有效链接或文件后再加入；不使用通用网站入口冒充个人链接。

### 以后添加研究方向

在教育与联系部分之间插入下面结构，并把文字换成自己的真实方向。配套样式已准备好；还可以在顶部导航添加对应锚点。

```html
<section class="research section" id="research" aria-labelledby="research-title">
  <div class="section-heading">
    <h2 id="research-title">Research interests</h2>
  </div>
  <ul class="interest-list">
    <li>填写你的真实研究方向</li>
  </ul>
</section>
```

### 以后添加论文

仅在有真实论文时添加此结构，用真实题目、作者、发表状态和链接替换示例文本：

```html
<section class="publications section" id="publications" aria-labelledby="publications-title">
  <div class="section-heading">
    <h2 id="publications-title">Publications</h2>
  </div>
  <article class="publication">
    <h3>真实论文标题</h3>
    <p>作者列表，标明 Jiacheng Huang</p>
    <p>真实会议、期刊或预印本状态与年份</p>
    <!-- 有真实链接时，再加入 PDF / Code / Project 链接。 -->
  </article>
</section>
```

## 本地预览

直接双击 `index.html` 可以查看正文。若要检查复制邮箱等浏览器功能，在此目录运行：

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

然后访问 `http://127.0.0.1:4173/`。复制邮箱按钮仅在支持剪贴板的 HTTPS 或 localhost 环境显示。网页无服务器代码、登录表单或追踪脚本。

## 维护与来源

- Minimal Light 许可为 CC0 1.0，完整原文已保留在 `licenses/minimal-light-CC0.txt`。
- 学校英文名称及学院英文名称参考[学校官方页面](https://global.cumt.edu.cn/Schools_and_Departments.htm)。
- 本项目的 HTML 和样式已改写；具体改动见 `THIRD_PARTY_NOTICES.md`。
