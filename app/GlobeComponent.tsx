import React from 'react';
import {GeoVideo, Globe, GlobeContextProvider} from "@openglobus/openglobus-react";

import "@openglobus/og/css/og.css";
import {Button} from "@/app/Button";

const GlobeComponent = () => {

    return (
        <GlobeContextProvider>

            <Button></Button>
            <Globe>

                <GeoVideo
                    corners={[
                        [
                            -134.7904382939764,
                            55.07955352950936
                        ],
                        [
                            -54.984314759410594,
                            54.98843914299802
                        ],
                        [
                            -55.041854075913825,
                            19.820153025849297
                        ],
                        [
                            -134.89882012831265,
                            19.631495126944017
                        ]
                    ]}
                    name="test"
                    src="https://openglobus.org/examples/examples/geoVideo/imergac_20160508_NASA.mp4"
                />
            </Globe>
        </GlobeContextProvider>
    );
};

export default GlobeComponent;