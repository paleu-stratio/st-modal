import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'st-egeo-theme';
/**
 * `st-modal`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class StModal extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        .st-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, .2);
          z-index: 9999;
        }

        .st-modal__box {
          box-shadow: 0 1px 10px 0 rgba(85, 85, 85, 0.8);
          background-color: #fff;
          margin: 20%;
        }

      </style>
      
      <div class="st-modal">
        <div class="st-modal__box">
          <slot></slot>
        </div>
      </div>
      
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'st-modal',
      },
    };
  }
}

window.customElements.define('st-modal', StModal);
