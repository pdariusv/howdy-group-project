import React from "react";
import { Box,  styled } from "@material-ui/core";
import termOfUse from '../../data/term-of-use-data'

const MyBox = styled(Box)({
  paddingLeft: 25
});

const MySubSection = (props) => {
    return (<article id={this.props.nameSub}>
      <section className="container">
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
      </section>
    </article>);
}

export default function StaticPage() {
  return (
    <MyBox>
    <div>
      <main>
        <article id="term-of-use">
          <section id="sub-section" className="container">
          { termOfUse.map( (term,idx) => ( <MySubSection title={term.title} nameSub={term.name}  content={term.content}/> ))}
          </section>
        </article>
      </main>
    </div>
     </MyBox>    
  );
}
