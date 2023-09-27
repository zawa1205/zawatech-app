import type { Meta, StoryObj } from '@storybook/react'
import { PostContent } from '.'

const meta = {
  title: 'parts/PostContent',
  component: PostContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PostContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Gitlab-CIでビルド時に環境変数CIが原因でエラーになる時の対処法',
    date: '2021-05-02T12:08:19',
    tags: ['タグ１', 'タグ２', 'タグ３'],
    categories: ['カテゴリ１', 'カテゴリ２', 'カテゴリ３'],
    terms: ['term1', 'term2', 'term3'],
    content:
      '\n' +
      '<p>GitLabのCI/CDを用いて、GitLab側でビルド&amp;AWSのS3へデプロイをしようとしたときに<br>以下のようなエラーが起きました。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<div class="hcb_wrap"><pre class="prism line-numbers lang-plain" data-file="GitLab &gt; CI/CD &gt; ジョブ"><code>⋮\n' +
      'yarn build\n' +
      '　⋮\n' +
      '　Treating warnings as errors because process.env.CI = true.\n' +
      '　Most CI servers set it automatically.\n' +
      '　Failed to compile.\n' +
      '　⋮</code></pre></div>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>Githubの解決方法はいくつか見つけましたが、Gitlabの解決方法が日本の記事で見つからなかったのでまとめました。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<h2 class="wp-block-heading">TL;DR</h2>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<div class="hcb_wrap"><pre class="prism line-numbers lang-plain" data-file="gitlab-ci.yml"><code>build_job:\n' +
      '　stage: build\n' +
      '　variables:\n' +
      '　　CI: false\n' +
      '　script:\n' +
      '　　- yarn\n' +
      '　　- yarn build</code></pre></div>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>原因は環境変数のCIがtrueになっているせいで、ビルド時のwarningがerrorとして処理されるためです。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>ジョブのvariablesにCI: falseを定義することで、実行モードがCIと認識されなくなり、ビルドが通ります。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<h2 class="wp-block-heading">今回の事象と原因</h2>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<h3 class="wp-block-heading">事象</h3>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>Gitlab-CIを使いgitlab-ci.ymlを元に、Gitlab上でビルドのジョブを実行していた時に、冒頭で書いた以下のエラーが出ました。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<div class="hcb_wrap"><pre class="prism line-numbers lang-plain"><code>⋮\n' +
      'yarn build\n' +
      '　⋮\n' +
      '　Treating warnings as errors because process.env.CI = true.\n' +
      '　Most CI servers set it automatically.\n' +
      '　Failed to compile.\n' +
      '　⋮</code></pre></div>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>要約すると、</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>process.env.CI = true であるため、ビルド時に出るwarningをerrorとして扱います。<br>ほとんどのCIサーバーでは自動的にtrueにセットされています。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>とのことです。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<h3 class="wp-block-heading">原因</h3>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>今回の自分のケースでは、TypeScriptで書いていてtypescript-eslintという構文エラーの検証パッケージを入れています。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>ローカルではany型を多用していたのですが、typescript-eslintでは「any型を使うな！ちゃんと型定義をしろ！」とwarningで警告されていました。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>ですがとりあえず出来れば良いの精神だったので、このwarningを無視していたわけですが(ダメ、絶対)<br>このwarningが、gitlab上でbuildした時にerrorとして認識されてしまった訳です。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<h2 class="wp-block-heading">解決方法</h2>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>gitlab-ci.ymlで記述したものがGitlab上で実行されるのですが、その中でCIの環境変数をfalseと定義してあげることでwarningをerrorとして処理させなくしています。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<div class="hcb_wrap"><pre class="prism line-numbers lang-plain" data-file="gitlab-ci.yml"><code>build_job:\n' +
      '　stage: build\n' +
      '　variables:\n' +
      '　　CI: false\n' +
      '　script:\n' +
      '　　- yarn\n' +
      '　　- yarn build</code></pre></div>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>gitlab-ci.ymlの書き方の問題ですが、ジョブのvariablesにCIを定義してあげる必要があるんですね。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>(↓GitLab公式ドキュメント 定義済みの環境変数)<br><a href="https://gitlab-docs.creationline.com/ee/ci/variables/predefined_variables.html">https://gitlab-docs.creationline.com/ee/ci/variables/predefined_variables.html</a></p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<p>ちなみにgithubの方では以下のような書き方で解決できるようです。</p>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<div class="hcb_wrap"><pre class="prism line-numbers lang-plain"><code>jobs:\n' +
      '  build:\n' +
      '    name: Build\n' +
      '    runs-on: alpine-latest\n' +
      '    steps:\n' +
      '      - name: Checkout\n' +
      '        uses: actions/checkout@master\n' +
      '      - name: Install\n' +
      '        run: yarn\n' +
      '      - name: Build\n' +
      '        run: yarn build\n' +
      '        env:\n' +
      '          CI: false</code></pre></div>\n',
  },
}
