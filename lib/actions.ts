// lib/actions.ts
'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
// ✨ Thêm dòng này
// Khởi tạo Prisma Client để tương tác với database
const prisma = new PrismaClient();

// --- PRODUCT ACTIONS ---

export async function getProducts() {
  return await prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getProductById(id: string) {
  return await prisma.product.findUnique({ where: { id } });
}
export async function getFilteredProducts(categorySlug?: string) {
  if (!categorySlug || categorySlug === 'all') {
    // Nếu không có category hoặc là 'all', lấy tất cả sản phẩm
    return await prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
  } else {
    // Nếu có category, lọc theo categorySlug
    return await prisma.product.findMany({
      where: {
        categorySlug: categorySlug,
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
export async function createProduct(data: any) { // 1. Nhận vào object `data`
  try {
    await prisma.product.create({
      data: {
        id: data.slug,           // 2. Lấy dữ liệu trực tiếp từ `data.fieldName`
        name: data.name,
        sku: data.sku,
        price: data.price,
        category: data.category,
        categorySlug: data.categorySlug,
        images: data.images,
        short_desc: data.short_desc,
        description: data.description,
        specs: data.specs,
      }
    });
  } catch (error: any) {
    if (error.code === 'P2002') { // Lỗi trùng lặp unique key (ví dụ: SKU hoặc ID)
      return { error: `Lỗi: ${error.meta?.target} đã tồn tại. Vui lòng chọn một giá trị khác.` };
    }
    return { error: 'Đã xảy ra lỗi không xác định. Vui lòng thử lại.' };
  }
  revalidatePath('/(admin)/products', 'page');
  redirect('/products');
}

export async function updateProduct(id: string, data: any) { // 1. Nhận vào object `data`
  try {
    await prisma.product.update({
      where: { id },
      data: {
        name: data.name,            // 2. Lấy dữ liệu trực tiếp từ `data.fieldName`
        sku: data.sku,
        price: data.price,
        category: data.category,
        categorySlug: data.categorySlug,
        images: data.images,
        short_desc: data.short_desc,
        description: data.description,
        specs: data.specs,
      }
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
        return { error: `Lỗi: ${error.meta?.target} đã tồn tại. Vui lòng chọn một giá trị khác.` };
      }
      return { error: 'Đã xảy ra lỗi không xác định. Vui lòng thử lại.' };
  }

  revalidatePath('/(admin)/products', 'page');
  revalidatePath(`/san-pham/${id}`, 'page');
  redirect('/products');
}

export async function deleteProduct(id: string) {
  try {
    await prisma.product.delete({ where: { id } });
    revalidatePath('/(admin)/products', 'page');
    return { success: true, message: 'Xóa sản phẩm thành công.' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Lỗi khi xóa sản phẩm.' };
  }
}

// --- NEWS ACTIONS ---

export async function getNewsArticles() {
  return await prisma.newsArticle.findMany({ orderBy: { date: 'desc' } });
}

export async function getNewsArticleBySlug(slug: string) {
  return await prisma.newsArticle.findUnique({ where: { slug } });
}

export async function createNewsArticle(formData: FormData) {
  await prisma.newsArticle.create({
    data: {
      slug: formData.get('slug') as string,
      title: formData.get('title') as string,
      excerpt: formData.get('excerpt') as string,
      imageUrl: formData.get('imageUrl') as string,
      date: new Date(formData.get('date') as string),
      content: formData.get('content') as string,
    }
  });
  revalidatePath('/(admin)/posts', 'page');
  redirect('/posts');
}

export async function updateNewsArticle(slug: string, formData: FormData) {
    await prisma.newsArticle.update({
        where: { slug },
        data: {
            title: formData.get('title') as string,
            excerpt: formData.get('excerpt') as string,
            imageUrl: formData.get('imageUrl') as string,
            date: new Date(formData.get('date') as string),
            content: formData.get('content') as string,
        }
    });
    revalidatePath('/(admin)/posts', 'page');
    revalidatePath(`/tin-tuc/${slug}`, 'page');
    redirect('/posts');
}

export async function deleteNewsArticle(slug: string) {
  try {
    await prisma.newsArticle.delete({ where: { slug } });
    revalidatePath('/(admin)/posts', 'page');
    return { success: true, message: 'Xóa bài viết thành công.' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Lỗi khi xóa bài viết.' };
  }
}

// --- PROJECT ACTIONS ---

export async function getProjects() {
    return await prisma.project.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getProjectBySlug(slug: string) {
  return await prisma.project.findUnique({ where: { slug } });
}

export async function createProject(formData: FormData) {
    await prisma.project.create({
        data: {
            slug: formData.get('slug') as string,
            title: formData.get('title') as string,
            imgSrc: formData.get('imgSrc') as string,
            content: formData.get('content') as string,
        }
    });
    revalidatePath('/(admin)/projects', 'page');
    redirect('/projects');
}

export async function updateProject(slug: string, formData: FormData) {
    await prisma.project.update({
        where: { slug },
        data: {
            title: formData.get('title') as string,
            imgSrc: formData.get('imgSrc') as string,
            content: formData.get('content') as string,
        }
    });
    revalidatePath('/(admin)/projects', 'page');
    revalidatePath(`/du-an/${slug}`, 'page');
    redirect('/projects');
}

export async function deleteProject(slug: string) {
  try {
    await prisma.project.delete({ where: { slug } });
    revalidatePath('/(admin)/projects', 'page');
    return { success: true, message: 'Xóa dự án thành công.' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Lỗi khi xóa dự án.' };
  }
}

// --- SETTINGS ACTIONS ---

export async function getSiteSettings() {
  let settings = await prisma.siteSettings.findUnique({ where: { id: "main_settings" } });
  if (!settings) {
    settings = await prisma.siteSettings.create({
      data: {
        id: "main_settings",
        // + Thêm giá trị mặc định cho các trường mới
        headerPhoneNumbers: "SĐT Header",
        facebookUrl: "#",
        youtubeUrl: "#",
        footerAddressHQ: "Địa chỉ trụ sở",
        footerAddressOffice: "Địa chỉ văn phòng",
        footerEmail: "email@example.com",
        footerCopyrightYear: new Date().getFullYear().toString(),
        footerPhoneNumbers: "SĐT Footer", // + Thêm giá trị mặc định
        primaryColor: "#1e40af",
        backgroundColor: "#ffffff",
      }
    });
  }
  return settings;
}

export async function updateSiteSettings(formData: FormData) {
    await prisma.siteSettings.update({
        where: { id: "main_settings" },
        data: {
            // + Cập nhật theo tên trường mới
            headerPhoneNumbers: formData.get('headerPhoneNumbers') as string,
            facebookUrl: formData.get('facebookUrl') as string,
            youtubeUrl: formData.get('youtubeUrl') as string,
            footerAddressHQ: formData.get('footerAddressHQ') as string,
            footerAddressOffice: formData.get('footerAddressOffice') as string,
            footerEmail: formData.get('footerEmail') as string,
            footerCopyrightYear: formData.get('footerCopyrightYear') as string,
            footerPhoneNumbers: formData.get('footerPhoneNumbers') as string, // + Thêm trường mới
            primaryColor: formData.get('primaryColor') as string,
            backgroundColor: formData.get('backgroundColor') as string,
        }
    });
    revalidatePath('/', 'layout');
    redirect('/settings');
}


// --- DASHBOARD ACTIONS ---

export async function getProductCount() {
  return await prisma.product.count();
}

export async function getNewsArticleCount() {
  return await prisma.newsArticle.count();
}

export async function getProjectCount() {
  return await prisma.project.count();
}


// --- AUTH ACTIONS (Placeholder - Sẽ được thay thế bởi NextAuth) ---

export async function signInAction(formData: FormData) {
  // Logic này sẽ được NextAuth.js xử lý trong file app/api/auth/[...nextauth]/route.ts
  // Chúng ta giữ lại để tham khảo, nhưng trang login sẽ dùng signIn() của NextAuth.
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (email === 'admin@example.com' && password === 'admin123') {
    cookies().set('session', 'admin-logged-in', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 ngày
      path: '/',
    });
    redirect('/dashboard');
  }
  redirect('/login?error=Invalid credentials');
}

export async function signOutAction() {
  // Logic này sẽ được xử lý bằng hàm signOut() của NextAuth
  cookies().set('session', '', { expires: new Date(0) });
  redirect('/login');
}
export async function getHeroSlides() {
  // Vì chưa có auth, chúng ta sẽ xóa bỏ logic kiểm tra đăng nhập
  // và chỉ tập trung vào việc lấy dữ liệu.
  try {
    const heroSlides = await prisma.heroSlide.findMany({
      orderBy: {
        order: 'asc',
      },
    });
    return heroSlides;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu hero slides:", error);
    // Nếu có lỗi, trả về một mảng rỗng để tránh crash trang
    return [];
  }
}

// Thêm một slide mới
export async function createHeroSlide(formData: FormData) {
  const url = formData.get('url') as string;
  const alt = formData.get('alt') as string;

  if (!url || !alt) {
    return { error: 'URL ảnh và văn bản thay thế là bắt buộc.' };
  }

  // Tự động gán thứ tự lớn nhất + 1
  const maxOrderSlide = await prisma.heroSlide.findFirst({
    orderBy: { order: 'desc' },
  });
  const newOrder = maxOrderSlide ? maxOrderSlide.order + 1 : 0;

  await prisma.heroSlide.create({
    data: {
      url,
      alt,
      order: newOrder,
    },
  });

  revalidatePath('/'); // Cập nhật cache trang chủ
  revalidatePath('/(admin)/slides'); // Cập nhật cache trang admin
}

// Xóa một slide
export async function deleteHeroSlide(id: string) {
  await prisma.heroSlide.delete({ where: { id } });
  revalidatePath('/');
  revalidatePath('/(admin)/slides');
}

// (Tùy chọn nâng cao) Cập nhật thứ tự các slide
export async function updateHeroSlideOrder(slides: { id: string; order: number }[]) {
  const updates = slides.map(slide => 
    prisma.heroSlide.update({
      where: { id: slide.id },
      data: { order: slide.order },
    })
  );
  await prisma.$transaction(updates);
  revalidatePath('/');
  revalidatePath('/(admin)/slides');
}