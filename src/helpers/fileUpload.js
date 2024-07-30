export const fileUpload = async (file) => {
  if (!file) throw new Error("No tiene un archivo seleccionado");

  const cloudUrl = "https://api.cloudinary.com/v1_1/dy7eycl8m/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    console.log(resp);
    if (!resp.ok) throw new Error("Fallo en la subida de imagen");
    console.log({ cloudResp });
    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
};
