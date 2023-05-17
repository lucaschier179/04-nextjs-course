import { cmsSections } from "../../components/cmsSections";
import { getCMSContent } from "./CMSProvider";

export function CMSSectionRender({ pageName }) {
  const sections = getCMSContent(`${pageName}.pageContent[0].section`);

  return sections.map((sectionProps) => {
    const Component = cmsSections[sectionProps.componentName];
    const isVisible = sectionProps.isVisible === true || sectionProps.isVisible === undefined;

    if(!Component) return null;
    if(!isVisible) return null;

    return (
      <Component key={sectionProps.id} {...sectionProps} />
    )
  })
}