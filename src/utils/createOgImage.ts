// double escape for commas and slashes
const metaContent = (str: string) =>
  encodeURIComponent(encodeURIComponent(str));

export const createOgImage = ({title, meta}: {title: string; meta: string}) => {
  return [
    // ACCOUNT PREFIX
    // Add your own Cloudinary account ID.
    `https://res.cloudinary.com/flawns-site/image/upload`,
    // Composed Image Transformations
    `w_1600,h_836,q_100`,

    // TITLE
    `l_text:Arial_75:${metaContent(title)},co_rgb:ffff,c_fit,w_1400,h_240`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_180`,

    // OTHER META
    // Arial, but smaller
    `l_text:Arial_48:${metaContent(meta)},co_rgb:ffe4e680,c_fit,w_1400`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_100`,

    // PROFILE IMAGE
    // dynamically fetched from my twitter profile
    `l_twitter_name:Ioofyy`,
    // Transformations
    `c_thumb,g_face,r_max,w_380,h_380,q_100`,
    // Positioning
    `fl_layer_apply,w_140,g_north_west,x_100,y_100`,

    // BG
    `bg-gradient_x8l41v.jpg`,
  ].join("/");
};