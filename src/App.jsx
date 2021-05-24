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
              catNo="#152"
              catLink="https://octodex.github.com//mona-the-rivetertocat/"
              catImageSrc="https://octodex.github.com//images/mona-the-rivetertocat.png"
              creator="johncreek"
              creatorLink="https://github.com/johncreek"
              creatorPic="https://github.com/johncreek.png"
            />
            <Octocat
              catName="Terracottocat"
              catNo="149"
              catLink="https://octodex.github.com//terracottocat/"
              catImageSrc="https://octodex.github.com//images/Terracottocat_Single.png"
              creator="chubbmo"
              creatorLink="https://github.com/chubbmo"
              creatorPic="https://github.com/chubbmo.png"
            />
            <article className="test no3">
              <a href="https://octodex.github.com//terracottocat/">
                <img
                  src="https://octodex.github.com//images/Terracottocat_Single.png"
                  alt="Terracottocat"
                  width="400"
                  height="400"
                />
              </a>
              <ul>
                <li>
                  #149:
                  <a href="https://octodex.github.com//terracottocat/">
                    <strong>Terracottocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/chubbmo">
                    <img
                      src="https://github.com/chubbmo.png"
                      width="24px"
                      height="24px"
                      alt="chubbmo"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//octogatos/">
                <img
                  src="https://octodex.github.com//images/Octogatos.png"
                  width="400"
                  height="400"
                  alt="Octogatos"
                />
              </a>
              <ul>
                <li>
                  #148:
                  <a href="https://octodex.github.com//octogatos/">
                    <strong>Octogatos</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cameronfoxly">
                    <img
                      src="https://github.com/cameronfoxly.png"
                      width="24px"
                      height="24px"
                      alt="cameronfoxly"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//brennatocat/">
                <img
                  src="https://octodex.github.com//images/Brennatocat.png"
                  width="400"
                  height="400"
                  alt="Brennatocat"
                />
              </a>
              <ul>
                <li>
                  #144
                  <a href="https://octodex.github.com//brennatocat/">
                    <strong>Brennatocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/johncreek">
                    <img
                      src="https://github.com/johncreek.png"
                      width="24px"
                      height="24px"
                      alt="johncreek"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//sentrytocat/">
                <img
                  src="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
                  width="400"
                  height="400"
                  alt="Sentrytocat"
                />
              </a>
              <ul>
                <li>
                  #142:
                  <a href="https://octodex.github.com//sentrytocat/">
                    <strong>Sentrytocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cameronmcefee">
                    <img
                      src="https://github.com/cameronmcefee.png"
                      width="24px"
                      height="24px"
                      alt="cameronfoxly"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//umbrellatocat/">
                <img
                  src="https://octodex.github.com//images/puddle_jumper_octodex.jpg"
                  width="400px"
                  heigh="400px"
                  alt="Umbrellatocat"
                />
              </a>
              <ul>
                <li>
                  #141
                  <a href="https://octodex.github.com//umbrellatocat/">
                    <strong>Umbrellatocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rubyjazzy">
                    <img
                      src="https://github.com/rubyjazzy.png"
                      width="24px"
                      height="24px"
                      alt="rubyjazzy"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//boxertocat/">
                <img
                  src="https://octodex.github.com//images/boxertocat_octodex.jpg"
                  width="400"
                  height="400"
                  alt="Boxertocat"
                />
              </a>
              <ul>
                <li>
                  #140:
                  <a href="https://octodex.github.com//boxertocat/">
                    <strong>Boxertocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rubyjazzy">
                    <img
                      src="https://github.com/rubyjazzy.png"
                      width="24px"
                      height="24px"
                      alt="rubyjazzy"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//suftocat/">
                <img
                  src="https://octodex.github.com//images/surftocat.png"
                  width="400"
                  height="400"
                  alt="Surftocat"
                />
              </a>
              <ul>
                <li>
                  #139:
                  <a href="https://octodex.github.com//suftocat/">
                    <strong>Surftocat</strong>
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

            <article>
              <a href="https://octodex.github.com//scubatocat/">
                <img
                  src="https://octodex.github.com//images/scubatocat.png"
                  width="400"
                  height="400"
                  alt="Scubatocat"
                />
              </a>
              <ul>
                <li>
                  #137:
                  <a href="https://octodex.github.com//scubatocat/">
                    <strong>Scubatocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cameronfoxly">
                    <img
                      src="https://github.com/cameronfoxly.png"
                      width="24px"
                      height="24px"
                      alt="cameronfoxly"
                    />
                  </a>
                </li>
              </ul>
            </article>
            <article>
              <a href="https://octodex.github.com//justicetocat/">
                <img
                  src="https://octodex.github.com//images/justicetocat.jpg"
                  width="400"
                  height="400"
                  alt="Justicetocat"
                />
              </a>
              <ul>
                <li>
                  #133
                  <a href="https://octodex.github.com//justicetocat/">
                    <strong>Justicetocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/heyhayhay">
                    <img
                      src="https://github.com/heyhayhay.png"
                      width="24px"
                      height="24px"
                      alt="heyhayhay"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//dinotocat/">
                <img
                  src="https://octodex.github.com//images/dinotocat.png"
                  width="400"
                  height="400"
                  alt="Dinotocat"
                />
              </a>
              <ul>
                <li>
                  #129:
                  <a href="https://octodex.github.com//dinotocat/">
                    <strong>Dinotocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/kimestoesta">
                    <img
                      src="https://github.com/kimestoesta.png"
                      width="24px"
                      height="24px"
                      alt="kimestoesta"
                    />
                  </a>
                  <a href="https://github.com/heyhayhay">
                    <img
                      src="https://github.com/heyhayhay.png"
                      width="24px"
                      height="24px"
                      alt="heyhayhay"
                    />
                  </a>
                </li>
              </ul>
            </article>

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
