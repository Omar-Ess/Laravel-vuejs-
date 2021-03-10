import router from "./router";

export const redirectToErrorPageIfNeeded = status => {
    if (status === 404) {
        router.push("/admin/404");
        return true;
    } else if (status === 403) {
        router.push("/admin/403");
        return true;
    } else if (status === 401) {
        window.location = "/";
        return true;
    }
    return false;
};

export const fireConfirmation = callbackfn => {
    swal.fire({
        title: "êtes-vous sûr ? ",
        text: "Vous ne pourrez pas annuler cela !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f96302",
        cancelButtonColor: "black",
        confirmButtonText: "Oui, supprimez-le(s)",
        cancelButtonText: "Annuler"
    }).then(result => {
        if (result.isConfirmed) {
            callbackfn();
        }
    });
};
