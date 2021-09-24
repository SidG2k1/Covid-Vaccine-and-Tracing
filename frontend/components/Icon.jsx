import React from 'react';

export default function Icon(hasCheckbox) {
  if (hasCheckbox === true) {
    return (
      <div style={{ margin: "0 auto" }}>
        <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="104" height="104" rx="19.5" fill="#FFC7C7" stroke="black"/>
          <path d="M43.3597 72.9178L24.8347 54.3928C23.7218 53.2799 23.7218 51.4754 24.8347 50.3623L28.8651 46.3318C29.9781 45.2187 31.7827 45.2187 32.8956 46.3318L45.375 58.811L72.1043 32.0818C73.2173 30.9688 75.0219 30.9688 76.1348 32.0818L80.1652 36.1123C81.2782 37.2253 81.2782 39.0298 80.1652 40.1428L47.3902 72.9179C46.2772 74.0309 44.4727 74.0309 43.3597 72.9178Z" fill="black"/>
        </svg>
      </div>
    )
  } else {
    return (
      <div style={{ margin: "0 auto" }}>
        <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="104" height="104" rx="19.5" fill="#FFC7C7" stroke="black"/>
        </svg>
      </div>
    )
  }

}