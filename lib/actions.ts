// lib/actions.ts
'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

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
export async function createProduct(formData: FormData) {
  const specs = JSON.parse(formData.get('specs') as string || '{}');
  await prisma.product.create({
    data: {
      id: formData.get('id') as string, // Trong thực tế, nên dùng slug và để DB tự tạo id
      name: formData.get('name') as string,
      sku: formData.get('sku') as string,
      price: Number(formData.get('price')) || null,
      category: formData.get('category') as string,
      categorySlug: formData.get('categorySlug') as string,
     images: (formData.get('images') as string).split(',').map(img => img.trim()),
      short_desc: formData.get('short_desc') as string,
      description: formData.get('description') as string,
      specs: specs,
    }
  });
  revalidatePath('/(admin)/products', 'page');
  redirect('/products');
}

export async function updateProduct(id: string, formData: FormData) {
  const specs = JSON.parse(formData.get('specs') as string || '{}');
  await prisma.product.update({
    where: { id },
    data: {
      name: formData.get('name') as string,
      sku: formData.get('sku') as string,
      price: Number(formData.get('price')) || null,
      category: formData.get('category') as string,
      categorySlug: formData.get('categorySlug') as string,
      images: (formData.get('images') as string).split(',').map(img => img.trim()),
      short_desc: formData.get('short_desc') as string,
      description: formData.get('description') as string,
      specs: specs,
    }
  });
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
        phoneNumbers: "Điền số điện thoại",
        facebookUrl: "#",
        youtubeUrl: "#",
        addressHQ: "Điền địa chỉ trụ sở",
        addressOffice: "Điền địa chỉ văn phòng",
        email: "email@example.com",
        copyrightYear: new Date().getFullYear().toString(),
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
            phoneNumbers: formData.get('phoneNumbers') as string,
            facebookUrl: formData.get('facebookUrl') as string,
            youtubeUrl: formData.get('youtubeUrl') as string,
            addressHQ: formData.get('addressHQ') as string,
            addressOffice: formData.get('addressOffice') as string,
            email: formData.get('email') as string,
            copyrightYear: formData.get('copyrightYear') as string,
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