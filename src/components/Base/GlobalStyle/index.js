import { createGlobalStyle } from 'styled-components'

import { CLASSNAME_PREFIX } from 'config/params'
import { typography } from 'themes/design-tokens'

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: ${typography.type.primary};
        background-color: ${({ theme }) => theme.body.backgroundColor};
    }

    #root {
        height: 100%;
        .ant-layout {
            height: 100%;
            // background-color: ${({ theme }) => theme.body.backgroundColor};
        }
    }

    /* custom scrollbar appearance Gecko browser(Mozilla) */
    * {
        scrollbar-width: thin;
    }

    /* custom scrollbar appearance Webkit browser(Chrome, Safari) */
    ::-webkit-scrollbar {
        width: 6px !important;
        height: 6px !important;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.site.color.mono.c1000 + theme.site.transparency.t40};
    }

    .${CLASSNAME_PREFIX}main-navigation {
        form {
            margin-top: 10%;
            display: flex;
            justify-content: center;
            .ant-form-item {
                width: 70%;
                .ant-select-selector, .ant-select-selection-item {
                    height: 40px;
                    line-height: 40px;
                    border-radius: 4px;
                }
            }
        }

        .ant-drawer-body {
            display: flex;
            flex-direction: column;
        }
    
        .ant-menu {
            overflow-x: hidden;
            overflow-y: auto;
            border-right: none;
            .nav-title {
                ${props => props.theme.site.posTypoH6};
            }
        }

        .${CLASSNAME_PREFIX}main-nav {
            flex: 1;
        }
        .${CLASSNAME_PREFIX}bottom-nav {
            align-self: flex-end;
            margin-bottom: 32px;
        }
    
        .${CLASSNAME_PREFIX}printer-status {
            padding-left: 20px;
        }
    }

    .${CLASSNAME_PREFIX}no-select {
        user-select: none; /* Chrome and Opera */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
    }

    // for error pages
    .ant-result {
        flex: 1;
    }

    // global overwrite antd form
    .${CLASSNAME_PREFIX}form .ant-input-group-compact {
        display: flex;
    }
    .ant-input-group-compact {
        .ant-form-item {
            margin-bottom: unset;
        }
    }
    .ant-form-item-control-input {
        min-height: 40px;
        .ant-input-affix-wrapper {
            padding: 0px 11px;
            border-radius: 4px;
        }
        .ant-input, .ant-select-selector, 
        .ant-select-selection-search-input, 
        .ant-select:not(.ant-select-customize-input) .ant-select-selector, 
        .ant-cascader-picker,
        .ant-picker {
            min-height: 40px;
            border-radius: 4px;
            .ant-select-selection-placeholder, .ant-select-selection-item {
                line-height: 40px;
            }
        }
        .ant-select-multiple {
            .ant-select-selector {
                padding: 0 4px;
            }
            .ant-select-selection-item {
                height: unset;
            }
        }
    }
    .ant-form-item {
        word-break: break-word;
    }
    .ant-form-item-label > label {
        height: 40px;
    }
    // overwrite asterisks position of mandatory fields
    .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
        margin-right: unset;
        content: '';
    }
    .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::after {
        display: inline-block;
        margin-right: 4px;
        color: ${({ theme }) => theme.site.color.danger.c400};
        font-size: 14px;
        font-family: SimSun, sans-serif;
        line-height: 1;
        content: '*';
    }

    .${CLASSNAME_PREFIX}modal {
        padding-bottom: unset;
        box-shadow: 0px 4px 16px ${({ theme }) => theme.site.color.mono.c1000 + theme.site.transparency.t15};
        .ant-modal-content {
            border-radius: 8px;

            .ant-modal-header {
                border-radius: 5px 5px 0 0;
                border-bottom: 1px solid ${({ theme }) => theme.site.color.mono.c500};
                padding: 13px 16px;
                ${props => props.theme.site.posTypoOverline};
            }

            .ant-modal-body {
                max-height: 70vh;
                overflow: auto;
                padding: 16px 24px;
                ${props => props.theme.site.posTypoBody1};
            }

            .ant-modal-footer {
                border-top: 1px solid ${({ theme }) => theme.site.color.mono.c500};
                display: flex;
                justify-content: flex-end;

                button {
                    margin-left: unset;
                    :not(:last-of-type) {
                        margin-right: 16px;
                    }
                }
            }
        }

        &:not(.${CLASSNAME_PREFIX}nooverride) {
          .ant-modal-footer {
              button {
                //   ${({ theme }) => theme.button.secondary.default};
          
                //   &:hover {
                //       ${({ theme }) => theme.button.secondary.hover};
                //   }
          
                //   &.active {
                //       ${({ theme }) => theme.button.secondary.active};
                //   }
              }
          }
        }
    }

    .${CLASSNAME_PREFIX}modal-open {
        pointer-events: none;
    }

    .${CLASSNAME_PREFIX}link {
        color: ${({ theme }) => theme.site.color.primary.c400};
    }

    .${CLASSNAME_PREFIX}flex-center {
        display: flex;
        justify-content: center;
    }

    .${CLASSNAME_PREFIX}flex-vh-center {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .${CLASSNAME_PREFIX}flex-breakrow {
        flex-basis: 100%;
        height: 0;
    }

    .${CLASSNAME_PREFIX}wh100 {
        &&& { 
            width: 100%;
            height: 100%;
        }
    }

    .${CLASSNAME_PREFIX}skeleton-loader {
        .ant-skeleton-content .ant-skeleton-paragraph {
            margin-bottom: unset;

            > li + li {
                margin-top: 4px;
            }
        }
         
    }

    .${CLASSNAME_PREFIX}wrap-text {
        word-wrap: break-word;
        word-break: break-word;
    }

    .${CLASSNAME_PREFIX}long-text {
        * {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .${CLASSNAME_PREFIX}dropdown-no-wh {
        > div {
            width: 0;
            height: 0;
            padding: unset;
            margin: unset;
        }
    }

    .${CLASSNAME_PREFIX}no-pointer {
        pointer-events: none;
    }

    .${CLASSNAME_PREFIX}visible-hide {
        visibility: hidden;
    }

    .${CLASSNAME_PREFIX}dropdown-lower-zindex {
        z-index: 999;
    }

    .ant-picker-suffix > * {
        width: 24px;
        height: 24px;
    }
    .ant-picker-clear {
        width: 24px;
        height: 24px;
        > * {
            svg {
                width: 16px;
                height: 16px;
            }
            padding: 4px;
        }
    }

    .${CLASSNAME_PREFIX}daterange-reverse.ant-picker-dropdown.ant-picker-dropdown-range {
        .ant-picker-date-range-wrapper {
          .ant-picker-panel-container {
            display: flex;
            flex-direction: column-reverse;
          }
        }
    }

    .${CLASSNAME_PREFIX}custom-date-range-filter {
        .ant-picker-panels {
            position: relative;
            top: 60px;
        }

        .ant-picker-footer {
            display: flex;
            flex-direction: column-reverse;
            margin-bottom: 60px;

            .ant-picker-ranges {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                position: absolute;
                top: 12px;
                width: 100%;

                .ant-picker-preset {
                    :not(:last-of-type) {
                        margin-right: 7px;
                    }

                    width: 100%;
                    ${props => props.theme.button.secondary.default};
            
                    &:hover {
                        ${props => props.theme.button.secondary.hover};
                    }
            
                    &.active {
                        ${props => props.theme.button.secondary.active};
                    }
        
                    .ant-tag {
                        ${props => props.theme.site.posTypoButtonS};
                        color: inherit;
                        background: inherit;
                        border: none;
                        display: flex;
                        width: 100%;
                        height: 100%;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }
            
            .ant-picker-footer-extra {
                position: relative;
                top: 60px;
                display: flex;
                justify-content: flex-end;
                text-align: right;
                padding: 10px 16px;

                button:not(:last-of-type) {
                    margin-right: 16px;
                }
            }
        }
    }
`

export default GlobalStyle
