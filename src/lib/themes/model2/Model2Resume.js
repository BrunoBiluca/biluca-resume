import Page from "../../components/page/Page";
import { cfac } from "../../core/ComponentsFactory";

export default function Model2Resume({ resume }) {
  return <Page>
    {cfac().render(resume.mainInformation)}
  </Page>
}