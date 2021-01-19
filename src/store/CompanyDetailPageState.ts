import axios from "axios";
import { selectorFamily } from "recoil";
import Company from "../domain/Company";

export const CompanyState = selectorFamily<Company, number>({
  key: 'CompanyState',
  get: (companyId: number) => async ({ get }) => {
    const response = await axios.get<Company>(`${process.env.URL_API_COMPANIES}/companies/${companyId}`);

    return response.data;
  }
});