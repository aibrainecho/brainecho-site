import { NextRequest, NextResponse } from "next/server";
import { readNotices, createNotice, deleteNotice } from "@/lib/notices";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "brainecho1234";

export async function GET() {
  const notices = readNotices();
  // Return pinned first, then by date desc
  notices.sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  return NextResponse.json(notices);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, content, password, pinned } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "제목과 내용을 입력해주세요." },
        { status: 400 }
      );
    }

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "비밀번호가 일치하지 않습니다." },
        { status: 401 }
      );
    }

    const notice = createNotice({
      title,
      content,
      author: "관리자",
      pinned: pinned || false,
    });

    return NextResponse.json(notice, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, password } = body;

    if (!id) {
      return NextResponse.json(
        { error: "ID가 필요합니다." },
        { status: 400 }
      );
    }

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "비밀번호가 일치하지 않습니다." },
        { status: 401 }
      );
    }

    const deleted = deleteNotice(id);
    if (!deleted) {
      return NextResponse.json(
        { error: "공지사항을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
