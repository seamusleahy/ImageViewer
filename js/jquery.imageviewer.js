/**
 * A responsive lightbox for viewing images.
 *
 * 
 */
(function( $, undefined ) {
  //
  // Variables
  //
  var root = this;

  var imageViewer = root.imageViewer = {};

  var globalOptions = {
    container: false // The container element for the body content
  }

  var containerElement;
  var screenElement;
  var viewerContainerElement; 
  var descriptionElement;
  var mediaHolderElement;
  var closeButtonElement;
  var uiOverlayElement;

  var isOpen = false;


  //
  // API
  //

  /**
   * Set or get an global option
   */
  imageViewer.globalOption = function( prop, value ) {
    if( value != undefined ) {
      globalOptions[prop] = value;
    }

    return globalOptions[prop];
  };


  /**
   * Open an image in the viewer
   */
  imageViewer.open = function( options ) {
    ensureInitialization();

    containerElement.removeClass( 'hide' ).addClass( 'show' );
    // TODO
  };


  /**
   * Close the viewer
   */
  imageViewer.close = function() {
    if( !isOpen ) {
      isOpen = false;
      // TODO
    }
  }


  /**
   * Register an event listener
   */
  imageViewer.on = function( event, callback ) {
    // TODO
  }


  /**
   * Unregister an event listener
   */
  imageViewer.off = function ( event, callback ) {
    // TODO
  }


  //
  // Internal
  //
  var ensureInitialization = function() {
    if( !!containerElement ) {
      return;
    }

    containerElement = $(
      '<div class="image-viewer hide">' +
        '<div class="iv-screen">' +
          '<div class="iv-holder">' +
            '<div class="iv-media-holder"></div>' +
            '<div class="iv-ui-overlay">' +
              '<div class="iv-panel">' +
                '<a role="button" class="iv-close-button">&times;</a>' +
                '<div class="iv-description"></div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>'
    ).appendTo( 'body' );

    screenElement = containerElement.find( '.iv-screen');
    viewerContainerElement = containerElement.find( '.iv-holder');
    descriptionElement = containerElement.find( '.iv-description');
    mediaHolderElement = containerElement.find( '.iv-media-holder');
    closeButtonElement = containerElement.find( '.iv-close-button');
    uiOverlayElement = containerElement.find( '.iv-ui-overlay');
  };

})( jQuery );