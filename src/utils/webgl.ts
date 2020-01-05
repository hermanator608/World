/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 *
 * Slightly edited by Brandon Herman
 */

type WebGLVersions = '1' | '2'

var WEBGL = {
  isWebGLAvailable: function () {
    try {
      var canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  },

  isWebGL2Available: function () {
    try {
      var canvas = document.createElement('canvas');
      return !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'));
    } catch (e) {
      return false;
    }
  },

  getWebGLErrorMessage: function () {
    return this.getErrorMessage('1');
  },

  getWebGL2ErrorMessage: function () {
    return this.getErrorMessage('2');
  },

  getErrorMessage: (version: WebGLVersions) => {
    var names = {
      '1': 'WebGL',
      '2': 'WebGL 2'
    };

    var contexts: { [key in WebGLVersions]: typeof window.WebGLRenderingContext | typeof window.WebGL2RenderingContext } = {
      '1': window.WebGLRenderingContext,
      '2': window.WebGL2RenderingContext
    };

    var message = 'Your $0 does not seem to support $1';

    if (contexts[version]) {
      message = message.replace('$0', 'graphics card');
    } else {
      message = message.replace('$0', 'browser');
    }

    message = message.replace('$1', names[version]);

    return message;
  }

};

export { WEBGL };
