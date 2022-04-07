import Button from "../Button";
import InputText from "../InputText";
import InputPassword from "../InputPassword";
import InputNumber from "../InputNumber";
import { Card, CardContent, CardTitle } from "../Card";
import Select from "../Select";
import { useState } from "react";
import TermsOfUse from "./TermsOfUse";
import countries from "../../lib/countries.json";

export default function SignUp() {
  const [showModal, setShowModal] = useState(false);
  const [country, setCountry] = useState("VN");
  return (
    <>
      <Card>
        <CardTitle>Sign up</CardTitle>
        <CardContent>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 pr-2">
              <InputText label="First name" />
            </div>
            <div className="w-full md:w-6/12">
              <InputText label="Last name" />
            </div>
          </div>
          <Select
            label="Country"
            selected={country}
            onChange={(event) => setCountry(event.target.value)}
            options={countries.map((item) => {
              return { name: item.name, value: item.code };
            })}
          />
          <InputNumber label="Phone" />
          <div className="my-xs">
            <Button>Sign up</Button>
          </div>
          <hr className="my-sm text-gray-200" />
          <div className="self-start text-gray-500">
            By clicking the 'Sign up' button, you confirm that you accept our{" "}
            <span
              className="underline cursor-pointer text-primary"
              onClick={() => setShowModal(!showModal)}
            >
              Term of Use
            </span>{" "}
            and{" "}
            <span className="underline cursor-pointer text-primary">
              Privacy Policy
            </span>
          </div>
          {/* </div> */}
        </CardContent>
      </Card>
      <TermsOfUse
        enabled={showModal}
        trigger={() => setShowModal(!showModal)}
      />
    </>
  );
}
