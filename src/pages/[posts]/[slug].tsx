import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import "@/app/globals.css";
import { getPost } from "../../helpers/fire";
import MainFooter from "../../components/MainFooter";
import Head from "next/head";
function Post() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);

  const router = useRouter();
  const slug: any = router.query.slug || "not-found";

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await getPost(slug);
      setLoading(false);
      setData(res as any);
    };
    fetchPost();
  }, [slug]);

  const handleShare = () => {
    navigator?.canShare?.({ url: window.location.href });
  };

  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data?.title} />
        <meta property="og:description" content={data?.description} />
        <meta property="og:image" content={data?.images} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={data?.title} />
        <meta property="twitter:description" content={data?.description} />
        <meta property="twitter:image" content={data?.images} />
      </Head>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-full bg-white">
          <p className="text-2xl font-bold bg-green-600 text-gray-100 rounded-full px-8 py-1">
            loading...
          </p>
        </div>
      ) : (
        <div className="bg-gray-100">
          <div className="flex flex-col items-center justify-center w-full  min-h-screen  ">
            <div className="w-full  md:w-[80%] h-[80%] bg-white rounded-lg  p-8 mx-8 mt-4">
              <div className="flex flex-col mb-4">
                <div className="mb-4 flex justify-between items-center">
                  <h1 className="text-4xl font-bold  text-green-600  ">
                    {data?.title}
                  </h1>
                  <div className="flex items-center gap-4 ">
                    <WhatsappShareButton
                      url={window.location.href}
                      title={data?.title}
                      separator=":: "
                      className="inline-block text-xl cursor-pointer hover:opacity-40   ml-2 text-green-600 "
                    >
                      <WhatsappIcon className="h-10 w-10 rounded-full" />
                    </WhatsappShareButton>
                    <FacebookShareButton
                      url={window.location.href}
                      quote={data?.title}
                      className="inline-block text-xl cursor-pointer hover:opacity-40   ml-2 text-green-600 "
                    >
                      <FacebookIcon className="h-10 w-10 rounded-full" />
                    </FacebookShareButton>
                    <TelegramShareButton
                      url={window.location.href}
                      title={data?.title}
                      className="inline-block text-xl cursor-pointer hover:opacity-40   ml-2 text-green-600 "
                    >
                      <TelegramIcon className="h-10 w-10 rounded-full" />
                    </TelegramShareButton>
                    <LinkedinShareButton
                      url={window.location.href}
                      title={data?.title}
                      className="inline-block text-xl cursor-pointer hover:opacity-40   ml-2 text-green-600 "
                    >
                      <LinkedinIcon className="h-10 w-10 rounded-full" />
                    </LinkedinShareButton>
                    <EmailShareButton
                      url={window.location.href}
                      subject={data?.title}
                      body={data?.description}
                      className="inline-block text-xl cursor-pointer hover:opacity-40   ml-2 text-green-600 "
                    >
                      <EmailIcon className="h-10 w-10 rounded-full" />
                    </EmailShareButton>
                  </div>
                </div>
                <p className="text-md font-normal text-gray-400 mt-4  ">
                  {data?.description}
                </p>
              </div>
              <img
                src={data?.images}
                alt={data?.sku}
                className="w-full h-[80vh] object-cover mx-auto rounded-lg"
              />
              <p className="text-md font-normal text-gray-500 mt-8  bg-gray-100 p-4 rounded-lg">
                {data?.content}
              </p>
              <a href={data?.source} target="_blank" rel="noreferrer">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg mt-8">
                  Read More
                </button>
              </a>
            </div>
          </div>
          <MainFooter />
        </div>
      )}
    </>
  );
}

export default Post;

