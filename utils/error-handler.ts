import { errorNotification } from "./notification";

export const handleError = (error: any) => {
  if (error?.response?.data) {
    if (
      typeof error?.response?.data === "object" &&
      !Array.isArray(error?.response?.data)
    ) {
      Object.values(error?.response?.data).forEach((item: any) => {
        if (Array.isArray(item)) {
          if (item.length === 1) {
            errorNotification(item[0]);
          } else {
            item.forEach((el: any) => {
              errorNotification(el);
            });
          }
        } else if (typeof item === "string") {
          errorNotification(item);
        } else errorNotification("Something went wrong");
      });
    } else if (Array.isArray(error?.response?.data)) {
      error?.response?.data?.forEach((item: any) => {
        if (typeof item === "string") {
          errorNotification(item);
        } else errorNotification("An error occured!");
      });
    } else if (typeof error?.response?.data === "string") {
      errorNotification(error?.response?.data);
    } else errorNotification("An error occured!");
  } else errorNotification("An error occured!");
};
