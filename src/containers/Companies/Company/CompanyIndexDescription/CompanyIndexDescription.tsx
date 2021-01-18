import React, { FunctionComponent } from 'react';
import { Content } from '../../../../components/ui/Content/Content';
import { Index } from '../../../../domain/Index';

import './CompanyIndexDescription.scss';

interface CompanyIndexDescriptionProps {
  index: Index,
}

const CompanyIndexDescription: FunctionComponent<CompanyIndexDescriptionProps> = ({
  index
}) => {
  return (
    <Content>
      <div className="company-index-description-wrapper">
        <h2>{index}</h2>

        <h3>What is?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim lorem lorem, sed tincidunt lacus gravida non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean luctus eu est non laoreet. Nam ut quam sed libero malesuada finibus. Nullam eget nunc efficitur, fringilla neque eget, pharetra metus. In facilisis in justo sit amet vehicula. Ut sem nibh, tincidunt in enim vehicula, hendrerit congue erat. Donec non ante justo. Phasellus mattis varius urna, vel tempor urna hendrerit non.</p>

        <h3>What is it for?</h3>
        <p>Nunc maximus lorem accumsan, gravida ipsum sit amet, volutpat libero. Duis mi ante, euismod at congue sit amet, dictum at ante. In at massa tellus. Phasellus non arcu eget nisl condimentum imperdiet eget eget elit. Vestibulum auctor consequat augue, nec facilisis enim molestie eu. Nunc ex mauris, varius a diam ac, ultrices iaculis orci. Mauris pretium, nulla sed hendrerit euismod, felis ipsum consequat odio, vitae lacinia dolor ipsum vitae diam. Morbi eu suscipit quam. Donec eu maximus enim, non ullamcorper augue. Quisque malesuada ipsum efficitur rutrum pharetra. Praesent eget lorem sit amet eros varius imperdiet vel a arcu.</p>

        <h3>What can you use it for?</h3>
        <p>Curabitur ac porta quam. Aenean leo urna, dapibus quis eros sed, interdum tempor enim. Aliquam accumsan elementum lectus eu consequat. Praesent at malesuada dolor. Aenean ac porttitor elit. Donec turpis leo, aliquam a lobortis id, commodo nec massa. Sed elementum tortor sit amet nisi pellentesque feugiat. Maecenas non volutpat enim. Fusce facilisis lacus vel lacus cursus dictum. Morbi vulputate tempor arcu, in facilisis sem porttitor in. Cras luctus pulvinar dolor in rutrum. Nulla placerat, eros sit amet ornare tincidunt, odio ex tempus metus, at suscipit tellus felis ac augue. Quisque laoreet nulla vel rhoncus mollis. Aenean lectus tellus, tempor id elit vitae, rhoncus lobortis eros. Vivamus bibendum odio sed erat pharetra, sit amet egestas sapien placerat. Duis commodo quis est sit amet rhoncus.</p>
      </div>
    </Content>
  );
};

export default CompanyIndexDescription;
