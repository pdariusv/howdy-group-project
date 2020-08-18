import React from "react";
import { Box, Container, Typography, Paper, styled } from "@material-ui/core";
import termOfUse from '../../data/term-of-use-data'

const MyBox = styled(Box)({
  paddingLeft: 25
});

const MyContainer = styled(Container)({
  marginBottom: 10 ,


});

const MyPaper = styled(Paper)({
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: 10,
  paddingLeft: 10 
});

const MySubSection = (props) => {
    return (<article id={props.nameSub}>
      <MyContainer className="container">
        <MyPaper elevation={2}>
          <Typography component="h2" color="textPrimary">{props.title}</Typography>
          <Typography component="p" color="textSecondary">{props.content}</Typography>
        </MyPaper>
      </MyContainer>
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
