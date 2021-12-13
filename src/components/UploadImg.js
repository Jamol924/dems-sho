import React, { useState } from "react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import axios from "axios";

const uploader = async (file) => {
  
  const formData = new FormData();
  formData.append("file", file[0]);

  await axios
    .post("http://dems.inone.uz/api/upload-file", formData, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
    .then((el) => console.log(el))
    .catch((er) => console.log(er));
};

export const Demo = () => {
  const [fileList, setFileList] = useState([]);
  console.log(fileList[0])
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <>
      <ImgCrop rotate>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 5 && "+ Rasim joylang"}
        </Upload>
      </ImgCrop>
      <button type="button" onClick={() => uploader(fileList)} >add</button>
    </>
  );
};
