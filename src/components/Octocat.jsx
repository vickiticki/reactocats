import React from 'react'

export class Octocat extends React.Component {
  render() {
    return (
      <article>
        <a href={this.props.catLink}>
          <img
            className="test no2"
            src={this.props.catImageSrc}
            alt={this.props.catName}
            width="400"
            height="400"
          />
        </a>
        <ul>
          <li>
            <li>{this.props.catNo}</li>
            <a href={this.props.catLink}>
              <strong>{this.props.catName}</strong>
            </a>
          </li>
          <li>
            <a href={this.props.creatorLink}>
              <img
                src={this.props.creatorPic}
                width="24px"
                height="24px"
                alt={this.props.creator}
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}
