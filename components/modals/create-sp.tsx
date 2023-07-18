import {
  Button,
  FileInput,
  Loader,
  LoadingOverlay,
  Modal,
  TextInput,
} from "@mantine/core";
import React, {  useEffect, useState } from "react";
import { Gallery } from "iconsax-react";
import axios from "axios";
import { toast } from "react-toastify";

import { Close } from "./icons/close";
import { SpInfoIcon } from "./icons";
import { handleError } from "../../utils/error-handler";


export const CreateSp = ({
  opened,
  setOpened,
  getSp,
  id,
}: {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  getSp?: () => void;
  id?: number;
}) => {
  const intialDetails = { name: "", website_url: "", picture: null };
  const [inner, setInner] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [createSp, setCreateSp] = useState<{
    name: string;
    website_url: string;
    picture: File | null;
  }>(intialDetails);
  const [image, setImage] = useState("");

  // A Post request to send input details to  Create an Sp

  const handleCreate = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;

    try {
      const formData = new FormData();
      formData.append("name", createSp.name);
      formData.append("website_url", createSp.website_url);
      formData.append("picture", createSp.picture as File);
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}service_providers/create/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: formData,
      });
      toast.success("Service Provider created successfully", {
        theme: "colored",
      });
      setOpened(false);
      setLoading(false);
      if (getSp) getSp();
      setCreateSp(intialDetails);
      console.log(data);
    } catch (error: any) {
      handleError(error);
      setLoading(false);
    }
  };
  const handleEdit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;

    try {
      const formData = new FormData();
      formData.append("name", createSp.name);
      formData.append("website_url", createSp.website_url);
      formData.append("picture", createSp.picture as File);
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}service_providers/${id}/status_toggle/`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: formData,
      });
      toast.success("Service Provider edited successfully", {
        theme: "colored",
      });
      setOpened(false);
      setLoading(false);
      if (getSp) getSp();
      setCreateSp(intialDetails);
    } catch (error: any) {
      handleError(error);
      setLoading(false);
    }
  };

  const fetchDetails = async () => {
    setLoadingDetails(true);
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;

    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}service_providers/${id}/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setLoadingDetails(false);
      setCreateSp({
        name: data?.name,
        picture: data?.picture,
        website_url: data?.url,
      });
      setImage(data?.test_picture_url);
    } catch (error: any) {
      handleError(error);
      setLoadingDetails(false);
    }
  };

  function DisplayImage(file: File | string) {
    if (typeof image === "string") {
      setImage(file as string);
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e?.target?.result as string);
      };
      reader.readAsDataURL(file as File);
    }
  }

  useEffect(() => {
    if (id) fetchDetails();
  }, [id]);

  useEffect(() => {
    if (createSp?.picture) DisplayImage(createSp?.picture as File);
  }, [createSp.picture?.name]);

  return (
    <Modal
      centered
      opened={opened}
      onClose={() => setOpened(false)}
      size="44vw"
      title={id ? "Update Service Provider" : "Create Service Provider"}
      classNames={{
        header: "px-6 pt-8 pb-2",
        body: "px-6 pb-8 flex-1 flex",
        title: "text-[#54565B] font-medium text-xl",
        content: "rounded-[20px] scroll-bar-hidden flex flex-col",
      }}
    >
      <form
        onSubmit={(e) => {
          if (id) handleEdit(e);
          else handleCreate(e);
        }}
        className="flex flex-col  h-full flex-1"
      >
        <p className="border-b border-b-[#F3F3F3] pb-8 text-uacs-primary-60 text-sm font-normal ">
          Add new service provider
        </p>

        <div className=" flex flex-col gap-4 justify-between flex-1 pt-6">
          {inner ? (
            <div className="grid grid-cols-[auto,1fr] gap-4 rounded-lg  items-center pl-5  pb-[27px] pt-5 pr-[25px] border-[1.82px] border-[#0089C8] sp-info-bg sp-info-shadow sp-info-filter ">
              <SpInfoIcon />
              <div className="flex flex-col gap-2 ">
                <div className="flex justify-between">
                  <p className="text-uacs-primary-90 text-sm font-medium">
                    Service Provider Info
                  </p>
                  <Close
                    onClick={() => {
                      setInner(false);
                    }}
                  />
                </div>

                <p className="text-uacs-primary-90 text-sm font-normal">
                  Create a service provider with attached permissions endpoint
                  and assign members of your organisation to the permissions.
                  Members will automatically gain access to the platforms based
                  on assigned permission.
                </p>
              </div>
            </div>
          ) : null}
          <div className="flex flex-col gap-4">
            <h2 className="">Add Picture/Logo</h2>
            <label
              className="w-full cursor-pointer rounded-lg py-3 h-fit flex justify-center border placeholder:text-sm placeholder:font-normal placeholder:text-uacs-eneutral-6 border-uacs-eneutral-5"
              htmlFor="file-input"
            >
              {image ? (
                <img
                  className="h-[150px] w-[150px] object-cover rounded-lg"
                  src={image}
                />
              ) : (
                <span className="flex items-center gap-2">
                  <span>Select Image</span>

                  <Gallery />
                </span>
              )}
              <FileInput
                required
                onChange={(value) =>
                  setCreateSp({ ...createSp, picture: value as File })
                }
                id="file-input"
                hidden
                accept="image/png,image/jpg,image/jpeg,image/webp"
              />
            </label>
          </div>

          <TextInput
            value={createSp.name}
            onChange={(e) => setCreateSp({ ...createSp, name: e.target.value })}
            required
            label="Service Providers Name"
            placeholder="Enter Service Providers Name "
            classNames={{
              input:
                "w-full h-12 placeholder:text-sm font-normal text-uacs-eneutral-6  rounded-lg",
              label: "text-uacs-eneutral-9 text-base font-medium ",
              root: "flex flex-col gap-4 ",
            }}
          />

          <TextInput
            value={createSp.website_url}
            onChange={(e) =>
              setCreateSp({ ...createSp, website_url: e.target.value })
            }
            required
            label="Website Url"
            placeholder="Enter URL "
            classNames={{
              input:
                "w-full h-12 placeholder:text-sm font-normal text-uacs-eneutral-6 rounded-lg ",
              label: "text-uacs-eneutral-9 text-base font-medium ",
              root: "flex flex-col gap-4 ",
            }}
          />

          <Button
            type="submit"
            disabled={loading ? true : false}
            className="bg-uacs-ared-7 text-white rounded-lg text-base font-medium hover:bg-red-800 h-12 w-full"
          >
            {loading ? (
              <span className="flex gap-1 items-center">
                Loading <Loader size="sm" />
              </span>
            ) : id ? (
              "Update Service Provider"
            ) : (
              "Create Service Provider"
            )}
          </Button>
        </div>
      </form>
      <LoadingOverlay visible={loading} />
    </Modal>
  );
};
