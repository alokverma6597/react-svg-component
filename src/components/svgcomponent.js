import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class svgcomponent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { error } = this.props;
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox={this.props.viewBox} aria-labelledby="title" fill={this.props.color}>
        <g>
        <path d={this.props.pathString}/>
        </g>
        <g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
      </svg>
      </div>
    );

  }
}


module.exports = svgcomponent;
