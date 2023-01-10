import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PostsApi from "../services/PostsApi";

const useStyles = makeStyles({
  card: {
    margin: 20,
  },
  media: {
    minWidth: 250,
    minHeight: 375,
  },
  hrefLinksNoStyle: {
    color: "inherit",
    cursor: "inherit",
    textDecoration: "none",
  },
});

const getSrc = (id) => {
  const imagePostWidth = 250;
  const imagePostHeight = 375;
  return `https://picsum.photos/id/${id}/${imagePostWidth}/${imagePostHeight}`;
};

const getAuthorUserName = (str) => {
  return str.substring(str.lastIndexOf("@"));
};

export async function getStaticProps() {
  const postsData = await PostsApi.getPosts();
  const posts = postsData.slice(0, 75);
  return {
    props: {
      posts,
    },
  };
}

const Posts = ({ posts }) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {posts.map((post, index) => (
        <Grid item lg key={post.id}>
          <Card className={classes.card}>
            <Link
              href={`/post/${encodeURIComponent(post.id)}`}
              style={{
                color: "inherit",
                cursor: "inherit",
                textDecoration: "none",
              }}
            >
              <CardActionArea>
                <CardMedia className={classes.media} title={post.author}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      minHeight: 375,
                    }}
                  >
                    <Image
                      src={getSrc(post.id)}
                      alt={`Photo by ${post.author}`}
                      placeholder="blur"
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.author}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {getAuthorUserName(post.author_url)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  className={classes.hrefLinksNoStyle}
                  href={post.author_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See My Work
                </a>
              </Button>
              <Button size="small" color="primary">
                <a
                  className={classes.hrefLinksNoStyle}
                  href={post.post_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Image Source
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
