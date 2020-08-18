import React from "react";
import { Box, Container, Typography, styled } from "@material-ui/core";
import termOfUse from '../../data/term-of-use-data'

const MyBox = styled(Box)({
  paddingLeft: 25
});

const MySubSection = (props) => {
    return (<article id={props.nameSub}>
      <Container className="container">
        <Typography component="h2" color="textPrimary">{props.title}</Typography>
        <Typography component="p" color="textSecondary">{props.content}</Typography>
      </Container>
    </article>);
}

export default function StaticPage() {
  return (
    <MyBox>
    <div>
      <main>
        <article id="term-of-use">
          <section id="sub-section" className="container">
          { termOfUse.map( (term,idx) => ( <MySubSection key={idx.toString()} title={term.title} nameSub={term.name}  content={term.content}/> ))}
          </section>
        </article>
      </main>
    </div>
     </MyBox>    
  );
}
