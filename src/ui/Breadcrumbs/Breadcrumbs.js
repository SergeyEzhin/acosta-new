import React from 'react';
import {Breadcrumbs} from 'react-breadcrumbs';

const BreadcrumbsWrapper = () => 
{
  return (
    <div className="breadcrumbs-wrapper">
      <Breadcrumbs
        // routes={this.props.routes}
        // params={this.props.params}
        separator=" / "
      />
    </div>
  )
}

export default BreadcrumbsWrapper;