import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import file from '../js/actions/index';

describe('file state', function () {
            it('Renders the file and description', function () {
                    const url = "../js/actions/index";
                    const description = "file description";

                    const renderer = TestUtils.createRenderer();
                    renderer.render( < Image url = {
                            url
                        }
                        description = {
                            description
                        }
                        />);
                        const result = renderer.getRenderOutput(); result.props.className.should.equal('repositoryReducer');

                        const img = result.props.children[0]; img.type.should.equal('file'); img.props.src.should.equal(url); img.props.alt.should.equal(description);

                        const p = result.props.children[1]; p.type.should.equal('p'); p.props.children.should.equal(description);
                    });
            });
