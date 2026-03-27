import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

export const useInstagramFeed = () => {
  return useQuery({
    queryKey: ["instagram-feed"],
    queryFn: async (): Promise<InstagramPost[]> => {
      const { data, error } = await supabase.functions.invoke("instagram-feed");
      if (error) throw error;
      return data.posts;
    },
    staleTime: 1000 * 60 * 15, // 15 minutes
    retry: 1,
  });
};
