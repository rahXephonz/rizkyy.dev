// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str));

export const createOgImage = ({title, meta}: {title: string; meta: string}) =>
  [
    // ACCOUNT PREFIX
    // Add your own Cloudinary account ID.
    `https://res.cloudinary.com/flawns-site/image/upload`,
    // Composed Image Transformations
    `w_1600,h_836,q_100`,

    // TITLE
    // Karla google font in light rose
    `l_text:Arial_80_bold:${e(title)},co_rgb:cfe2f3,c_fit,w_1400,h_240`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_350`,

    // META
    // Karla, but smaller
    `l_text:Karla_48:${e(meta)},co_rgb:cfe2f380,c_fit,w_1400`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_250`,

    // BG
    `bg-gradient_x8l41v.jpg`,
  ].join("/");
