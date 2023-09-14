import { GET_PREVIEW } from "@/graphql/queries";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { FC } from "react";

type Data = {
  data: {
    post: {
      title: string;
      content: HTMLElement;
    };
  };
};

export const Post: FC<{ postId: string }> = ({ postId }) => {
  const { data }: Data = useSuspenseQuery(GET_PREVIEW, {
    variables: { postId: postId },
  });
  return <div dangerouslySetInnerHTML={{ __html: data?.post?.content }} />;
};
