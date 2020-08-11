import React from "react";
import { Box,  styled } from "@material-ui/core";
import termOfUse from '../../data/term-of-use-data'

const MyBox = styled(Box)({
  paddingLeft: 25
});

class MySubSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      title: '',
      content: ''
    };
  }
  render(){
    return (<article id={this.props.name}>
      <section class="container">
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
      </section>
    </article>);
  }
}

export default function StaticPage() {
  return (
    <MyBox>
    <div>
      <main>
        <article id={"term-of-use"}>
          <section id="sub-section" class="container">
          { termOfUse.map( (term,idx) => ( <MySubSection/>) 
              )}
          </section>
        </article>
      </main>
    </div>
     </MyBox>    
  );
}
