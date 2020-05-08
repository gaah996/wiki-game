import React, { useState } from "react";
import request from "request";
import cheerio from "cheerio";

import * as S from "./styles";

const Main = () => {
  const [pages, setPages] = useState([]);
  const [query, setQuery] = useState("");

  const startSearch = (elink = null) => {
    request(elink ? elink : query, (error, response, body) => {
      if (error) return console.log(error);

      const title = extractTitle(body);
      setPages((previous) => [
        ...previous,
        { title, link: elink ? elink : query },
      ]);

      const link = extractLink(body);

      if (link && title !== "Philosophy - Wikipedia") {
        startSearch(link);
      } else {
        console.log("Finished!");
      }
    });
  };

  const extractLink = (body) => {
    const $ = cheerio.load(body);

    let link = null;
    const paragraphs = $("#content div > p");

    paragraphs.each((i, node, other) => {
      let text = $(node).html();

      console.log(text);

      text = text.replace(/\([^)]*\)[^"]/g, "");

      if (!link)
        link = cheerio
          .load(text)("a[href*='/wiki']:not([title*='Help'])")
          .attr("href");
    });

    return `https://en.wikipedia.org${link}`;
  };

  const extractTitle = (body) => {
    const $ = cheerio.load(body);

    const title = $("head > title").html();

    return title;
  };

  return (
    <S.Wrapper>
      <S.InputBox>
        <S.Input
          type="text"
          placeholder="Initial link"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <S.SearchButton
          onClick={() => {
            setPages([]);
            startSearch();
          }}
        >
          Start
        </S.SearchButton>
      </S.InputBox>
      <S.ListContainer>
        <S.Title>Pages:</S.Title>
        <S.List>
          {pages.length ? (
            pages.map((page) => (
              <S.ListItem key={page.title}>
                <S.ItemLabel>
                  <strong>Title: </strong>
                  {page.title}
                </S.ItemLabel>
                <S.Link>{page.link}</S.Link>
              </S.ListItem>
            ))
          ) : (
            <S.ListEmpty>Paste a page link to start</S.ListEmpty>
          )}
        </S.List>
      </S.ListContainer>
    </S.Wrapper>
  );
};

export default Main;
