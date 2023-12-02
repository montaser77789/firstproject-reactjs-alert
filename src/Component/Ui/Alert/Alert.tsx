import { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
import { AlertTypes } from "../../../types/types";

interface Ipropse {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  childern?: ReactNode;
}

const Alert = ({
  type = "alert-error",
  icon,
  title,
  description,
  childern,
}: Ipropse) => {
  return (
    <>
      <div className={type}>
        <div className="alert-header">
          <div className="alert-title">
            <span>{icon}</span>
            <h4>{title}</h4>
          </div>
          <X className="close" size={20} />
        </div>
        <p>{childern ? childern : description}</p>
      </div>
    </>
  );
};
export default Alert;
