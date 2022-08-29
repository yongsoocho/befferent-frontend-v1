import { UserContextProvider } from "./user.context";

const providers = [UserContextProvider];

const CombineContext = (components) => {
  return components.reduce((AccumulatedComponents, CurrentComponent) => {
    const Fragment = ({ children }) => (
      <AccumulatedComponents>
        <CurrentComponent>{children}</CurrentComponent>
      </AccumulatedComponents>
    );
    Fragment.displayName = "Fragment";
    return Fragment;
  });
};

export const GlobalContext = CombineContext(providers);
