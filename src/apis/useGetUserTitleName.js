import React from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

export const useGetUserTitleName = () => {
  const { username } = useParams();
  const { useGet } = useApi();
  
  const { data } = useGet("userTitle", `user/title/${username}`, undefined, {
    onSuccess: (response) => response.data,
  });
  return { title: data?.title };
};
