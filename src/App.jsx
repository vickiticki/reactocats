import React, { Component } from 'react'
import { Octocat } from './components/Octocat'

export class App extends Component {
  render() {
    return (
      <body>
        <header>
          <div className="container px-4">
            <nav>
              <ul className="top left">
                <li>
                  <a href="#">
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      width="45"
                      height="45"
                      alt="GithubLogo"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="bold">
                    Octodex
                  </a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="https://octodex.github.com/faq/">FAQ</a>
                </li>
                <li>
                  <a href="https://octodex.github.com/atom.xml">RSS</a>
                </li>
              </ul>
            </nav>

            <nav>
              <ul className="top right">
                <li>
                  <a href="https://twitter.com/githubdesign">
                    Follow us on Twitter
                  </a>
                </li>
                <li className="back">
                  <a href="https://github.com/">Back to GitHub.com</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <section>
            <Octocat
              catName="Mona-the-Rivertocat"
              catNo="#152:"
              catLink="https://octodex.github.com//mona-the-rivetertocat/"
              catImageSrc="https://octodex.github.com//images/mona-the-rivetertocat.png"
              creator="johncreek"
              creatorLink="https://github.com/johncreek"
              creatorPic="https://github.com/johncreek.png"
            />
            <Octocat
              catName="Terracottocat"
              catNo="149:"
              catLink="https://octodex.github.com//terracottocat/"
              catImageSrc="https://octodex.github.com//images/Terracottocat_Single.png"
              creator="chubbmo"
              creatorLink="https://github.com/chubbmo"
              creatorPic="https://github.com/chubbmo.png"
            />

            <Octocat
              catName="Octogatos"
              catNo="#148:"
              catLink="https://octodex.github.com//octogatos/"
              catImageSrc="https://octodex.github.com//images/Octogatos.png"
              creator="cameronfoxly"
              creatorLink="https://github.com/cameronfoxly"
              creatorPic="https://github.com/cameronfoxly.png"
            />

            <Octocat
              catName="Brennatocat"
              catNo="#144:"
              catLink="https://octodex.github.com//brennatocat"
              catImageSrc="https://octodex.github.com//images/Brennatocat.png"
              creator="johncreek"
              creatorLink="https://github.com/johncreek"
              creatorPic="https://github.com/johncreek.png"
            />
            <Octocat
              catName="Sentrytocat"
              catNo="#142:"
              catLink="https://octodex.github.com//sentrytocat"
              catImageSrc="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
              creator="cameronfoxly"
              creatorLink="https://github.com/cameronmcefee"
              creatorPic="https://github.com/cameronmcefee.png"
            />
            <Octocat
              catName="Umbrellatocat"
              catNo="#141:"
              catLink="https://octodex.github.com//umbrellatocat/"
              catImageSrc="https://octodex.github.com//images/puddle_jumper_octodex.jpg"
              creator="rubyjazzy"
              creatorLink="https://github.com/rubyjazzy"
              creatorPic="https://github.com/rubyjazzy.png"
            />
            <Octocat
              catName="Boxertocat"
              catNo="#140:"
              catLink="https://octodex.github.com//boxertocat/"
              catImageSrc="http://octodex.github.com//images/boxertocat_octodex.jpg"
              creator="rubyjazzy"
              creatorLink="https://github.com/rubyjazzy"
              creatorPic="https://github.com/rubyjazzy.png"
            />
            <Octocat
              catName="Surftocat"
              catNo="#139:"
              catLink="https://octodex.github.com//surftocat/"
              catImageSrc="https://octodex.github.com//images/surftocat.png"
              creator="jeejkang"
              creatorLink="https://github.com/jeejkang"
              creatorPic="http://github.com/jeejkang.png"
            />
            <Octocat
              catName="Scubatocat"
              catNo="#137:"
              catLink="https://octodex.github.com//scubatocat/"
              catImageSrc="https://octodex.github.com//images/scubatocat.png"
              creator="cameronfoxly"
              creatorLink="https://github.com/cameronfoxly"
              creatorPic="https://github.com/cameronfoxly.png"
            />

            <Octocat
              catName="Justicetocat"
              catNo="#133:"
              catLink="https://octodex.github.com//justicetocat"
              catImageSrc="https://octodex.github.com//images/justicetocat.jpg"
              creator="heyhayhay"
              creatorLink="https://github.com/heyhayhay"
              creatorPic="https://github.com/heyhayhay.png"
            />

            <Octocat
              catName="Dinotocat"
              catNo="#129:"
              catLink="https://octodex.github.com//dinotocat/"
              catImageSrc="https://octodex.github.com//images/dinotocat.png"
              creator="kimesotesta"
              creatorLink="https://github.com/kimestoesta"
              creatorPic="https://github.com/kimestoesta.png"
            />

            <article>
              <a href="https://octodex.github.com//spidertocat/">
                <img
                  src="https://octodex.github.com//images/spidertocat.png"
                  width="400"
                  height="400"
                  alt="Spidertocat"
                />
              </a>
              <ul>
                <li>
                  #87:
                  <a href="https://octodex.github.com//spidertocat/">
                    <strong>Spidertocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jeejkang">
                    <img
                      src="https://github.com/jeejkang.png"
                      width="24px"
                      height="24px"
                      alt="jeejkang"
                    />
                  </a>
                </li>
              </ul>
            </article>
          </section>
        </main>
        <footer>
          <div>
            <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
          </div>
        </footer>
      </body>
    )
  }
}
