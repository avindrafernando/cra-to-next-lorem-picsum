import React, { useState, useEffect } from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PostsApi from "../../../services/PostsApi";

const useStyles = makeStyles({
  card: {
    margin: 20,
    width: 310,
    height: 515,
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

// export async function getStaticPaths() {
//   const postsData = await PostsApi.getPosts();
//   const posts = postsData.slice(0, 75);

//   const paths = posts.map((post) => ({
//     params: { pid: post?.id.toString() },
//   }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const { pid } = params;
//   const post = await PostsApi.getPost(pid);
//   return {
//     props: {
//       post,
//     },
//   };
// }

export async function getServerSideProps({ query }) {
  const { pid } = query;
  const post = await PostsApi.getPost(pid);
  return {
    props: {
      post,
    },
  };
}

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} title={post?.author}>
          <div
            style={{
              position: "relative",
              width: "100%",
              minHeight: 375,
            }}
          >
            <Image
              src={getSrc(post?.id)}
              alt={`Photo by ${post?.author}`}
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
            {post?.author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a
            className={classes.hrefLinksNoStyle}
            href={post?.author_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            See My Work
          </a>
        </Button>
        <Button size="small" color="primary">
          <a
            className={classes.hrefLinksNoStyle}
            href={post?.post_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Image Source
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
