export const updatePhoto = async () => {
    const url = "https://academtest.ilink.dev/reviews/updatePhoto/86d70275-7bc7-4dc2-ad09-5b1985db4aaf"
    const formData = new FormData;
    formData.set("authorImage", "")
    const request = await fetch(url, {
        method: "POST",
        body: formData
    })
}