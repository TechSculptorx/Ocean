varying vec2 vUv;
varying float vNoise;

uniform sampler2D uImage;
uniform float time;

void main()	{
    vec2 newUV = vUv;

    vec4 oceanView  = texture2D(uImage, newUV);

	// gl_FragColor = vec4(finalColor,1.0);
    gl_FragColor = vec4(vUv, 0., 1.0);
    // gl_FragColor = oceanView;
    // gl_FragColor = vec4(vNoise, 0., 0., 1.);
    gl_FragColor = oceanView;
    gl_FragColor.rgb += 0.05 * vec3(vNoise);
}
