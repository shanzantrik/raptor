import React from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';

const Icons = () => {
  return (
    <div>
      <div className="container d-flex p-md-0">
        <ComponentsSidebar />
        <div className="az-content-body pd-lg-l-40 d-flex flex-column">
          <div className="az-content-breadcrumb">
            <span>Components</span>
            <span>UI Elements</span>
            <span>Icons</span>
          </div>
          <h2 className="az-content-title">Icons</h2>

          <div className="az-content-label mg-b-5">FontAwesome Icons</div>
          <p className="mg-b-20">
            The world’s most popular and easiest to use icon set just got an
            upgrade. More icons. More styles. More options.
          </p>

          <div className="az-icon-group bg-gray-200">
            <div className="row row-xs">
              <div className="col"><i className="far fa-address-book"></i></div>
              <div className="col"><i className="far fa-address-card"></i></div>
              <div className="col"><i className="far fa-arrow-alt-circle-down"></i></div>
              <div className="col"><i className="far fa-arrow-alt-circle-left"></i></div>
              <div className="col"><i className="far fa-arrow-alt-circle-up"></i></div>
              <div className="col"><i className="far fa-arrow-alt-circle-right"></i></div>
              <div className="col"><i className="fas fa-ban"></i></div>
              <div className="col d-none d-sm-block"><i className="far fa-bell"></i></div>
              <div className="col d-none d-sm-block"><i className="far fa-bell-slash"></i></div>
              <div className="col d-none d-sm-block"><i className="far fa-bookmark"></i></div>
              <div className="col d-none d-sm-block"><i className="far fa-calendar"></i></div>
              <div className="col d-none d-sm-block"><i className="far fa-calendar-check"></i></div>
            </div>
          </div>
          <div className="az-icon-group bg-gray-800 tx-white">
            <div className="row row-xs">
              <div className="col"><i className="far fa-check-circle"></i></div>
              <div className="col"><i className="far fa-clipboard"></i></div>
              <div className="col"><i className="far fa-clock"></i></div>
              <div className="col"><i className="far fa-clone"></i></div>
              <div className="col"><i className="far fa-comment"></i></div>
              <div className="col"><i className="far fa-compass"></i></div>
              <div className="col"><i className="fas fa-desktop"></i></div>
              <div className="col d-none d-sm-block"><i className="far fa-envelope"></i></div>
              <div className="col d-none d-sm-block"><i className="fas fa-envelope-open-text"></i></div>
              <div className="col d-none d-sm-block"><i className="far fa-eye"></i></div>
              <div className="col d-none d-sm-block"><i className="far fa-eye-slash"></i></div>
              <div className="col d-none d-sm-block"><i className="far fa-file-alt"></i></div>
            </div>
          </div>

          <p className="mg-t-15 mg-b-0">
            See more FontAwesome icons at{" "}
            <a
              href="https://fontawesome.com/icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              FontAwesome Icons
            </a>
          </p>

          <hr className="mg-y-30" />

          <div className="az-content-label mg-b-5">Ionicons Icons</div>
          <p className="mg-b-20">
            Premium designed icons for use in web, iOS, Android, and desktop
            apps. Support for SVG and web font.
          </p>

          <div className="az-icon-group bg-gray-200">
            <div className="row row-xs">
              <div className="col"><i className="icon ion-md-alarm"></i></div>
              <div className="col"><i className="icon ion-md-chatboxes"></i></div>
              <div className="col"><i className="icon ion-md-copy"></i></div>
              <div className="col"><i className="icon ion-md-cube"></i></div>
              <div className="col"><i className="icon ion-md-filing"></i></div>
              <div className="col"><i className="icon ion-md-eye"></i></div>
              <div className="col"><i className="icon ion-md-globe"></i></div>
              <div className="col d-none d-sm-block"><i className="icon ion-md-images"></i></div>
              <div className="col d-none d-sm-block"><i className="icon ion-md-laptop"></i></div>
              <div className="col d-none d-sm-block"><i className="icon ion-md-paper"></i></div>
              <div className="col d-none d-sm-block"><i className="icon ion-md-paper-plane"></i></div>
              <div className="col d-none d-sm-block"><i className="icon ion-md-pricetags"></i></div>
            </div>
          </div>
          <div className="az-icon-group bg-gray-800 tx-white">
            <div className="row row-xs">
              <div className="col"><i className="icon ion-ios-settings"></i></div>
              <div className="col"><i className="icon ion-ios-stats"></i></div>
              <div className="col"><i className="icon ion-ios-share-alt"></i></div>
              <div className="col"><i className="icon ion-ios-rocket"></i></div>
              <div className="col"><i className="icon ion-ios-rainy"></i></div>
              <div className="col"><i className="icon ion-ios-print"></i></div>
              <div className="col"><i className="icon ion-ios-pie"></i></div>
              <div className="col d-none d-sm-block"><i className="icon ion-ios-person"></i></div>
              <div className="col d-none d-sm-block"><i className="icon ion-ios-mic"></i></div>
              <div className="col d-none d-sm-block"><i className="icon ion-ios-locate"></i></div>
              <div className="col d-none d-sm-block"><i className="icon ion-ios-list-box"></i></div>
              <div className="col d-none d-sm-block"><i className="icon ion-ios-home"></i></div>
            </div>
          </div>

          <p className="mg-t-15 mg-b-0">
            See more Ionicons icons at{" "}
            <a
              href="https://ionicons.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ionicons
            </a>
          </p>

          <hr className="mg-y-30" />

          <div className="az-content-label mg-b-5">Line Awesome</div>
          <p className="mg-b-20">
            Replace Font Awesome with modern line icons with a single line of
            code.{" "}
          </p>

          <div className="az-icon-group bg-gray-200">
            <div className="row row-xs">
              <div className="col"><i className="la la-archive"></i></div>
              <div className="col"><i className="la la-bar-chart"></i></div>
              <div className="col"><i className="la la-bell"></i></div>
              <div className="col"><i className="la la-bug"></i></div>
              <div className="col"><i className="la la-calendar"></i></div>
              <div className="col"><i className="la la-camera"></i></div>
              <div className="col"><i className="la la-cog"></i></div>
              <div className="col d-none d-sm-block"><i className="la la-cube"></i></div>
              <div className="col d-none d-sm-block"><i className="la la-envelope"></i></div>
              <div className="col d-none d-sm-block"><i className="la la-film"></i></div>
              <div className="col d-none d-sm-block"><i className="la la-folder"></i></div>
              <div className="col d-none d-sm-block"><i className="la la-gift"></i></div>
            </div>
          </div>
          <div className="az-icon-group bg-gray-800 tx-white">
            <div className="row row-xs">
              <div className="col"><i className="la la-globe"></i></div>
              <div className="col"><i className="la la-heart"></i></div>
              <div className="col"><i className="la la-key"></i></div>
              <div className="col"><i className="la la-leaf"></i></div>
              <div className="col"><i className="la la-music"></i></div>
              <div className="col"><i className="la la-paper-plane"></i></div>
              <div className="col"><i className="la la-paint-brush"></i></div>
              <div className="col d-none d-sm-block"><i className="la la-phone"></i></div>
              <div className="col d-none d-sm-block"><i className="la la-rocket"></i></div>
              <div className="col d-none d-sm-block"><i className="la la-search"></i></div>
              <div className="col d-none d-sm-block"><i className="la la-star"></i></div>
              <div className="col d-none d-sm-block"><i className="la la-tag"></i></div>
            </div>
          </div>

          <p className="mg-t-15 mg-b-0">
            See more Line Awesome icons at{" "}
            <a
              href="https://icons8.com/icons/set/line-awesome"
              target="_blank"
              rel="noopener noreferrer"
            >
              Line Awesome
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Icons;
