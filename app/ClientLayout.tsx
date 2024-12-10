"use client";
import { store } from "@/components/redux/store";
import { Provider } from "react-redux";

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Provider store={store}>{children} </Provider>
    </>
  );
};
export default ClientLayout;
