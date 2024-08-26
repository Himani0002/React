@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  /* main */
  .main-container {
    @apply flex min-h-screen flex-1 flex-col items-center bg-dark-1 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10;
  }

  /* Head Text */
  .head-text {
    @apply text-heading2-bold text-light-1;
  }

  /* Activity */
  .activity-card {
    @apply flex items-center gap-2 rounded-md bg-dark-2 px-7 py-4;
  }

  /* No Result */
  .no-result {
    @apply text-center !text-base-regular text-light-3;
  }

  /* Community Card */
  .community-card {
    @apply w-full rounded-lg bg-dark-3 px-4 py-5 sm:w-96;
  }

  .community-card_btn {
    @apply rounded-lg bg-primary-500 px-5 py-1.5 text-small-regular !text-light-1 !important;
  }

  /* thread card  */
  .thread-card_bar {
    @apply relative mt-2 w-0.5 grow rounded-full bg-neutral-800;
  }

  /* User card */
  .user-card {
    @apply flex flex-col justify-between gap-4 max-xs:rounded-xl max-xs:bg-dark-3 max-xs:p-4 xs:flex-row xs:items-center;
  }

  .user-card_avatar {
    @apply flex flex-1 items-start justify-start gap-3 xs:items-center;
  }

  .user-card_btn {
    @apply h-auto min-w-[74px] rounded-lg bg-primary-500 text-[12px] text-light-1 !important;
  }

  .searchbar {
    @apply flex gap-1 rounded-lg bg-dark-3 px-4 py-2;
  }

  .searchbar_input {
    @apply border-none bg-dark-3 text-base-regular text-light-4 outline-none !important;
  }

  .topbar {
    @apply fixed top-0 z-30 flex w-full items-center justify-between bg-dark-2 px-6 py-3;
  }

  .bottombar {
    @apply fixed bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism p-4 backdrop-blur-lg xs:px-7 md:hidden;
  }

  .bottombar_container {
    @apply flex items-center justify-between gap-3 xs:gap-5;
  }

  .bottombar_link {
    @apply relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5;
  }

  .leftsidebar {
    @apply sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 pb-5 pt-28 max-md:hidden;
  }

  .leftsidebar_link {
    @apply relative flex justify-start gap-4 rounded-lg p-4;
  }

  .pagination {
    @apply mt-10 flex w-full items-center justify-center gap-5;
  }

  .rightsidebar {
    @apply sticky right-0 top-0 z-20 flex h-screen w-fit flex-col justify-between gap-12 overflow-auto border-l border-l-dark-4 bg-dark-2 px-10 pb-6 pt-28 max-xl:hidden;
  }
}

@layer utilities {
  .css-invert {
    @apply invert-[50%] brightness-200;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    border-radius: 2px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: #09090a;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #5c5c7b;
    border-radius: 50px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #7878a3;
  }
}

/* Clerk Responsive fix */
.cl-organizationSwitcherTrigger .cl-userPreview .cl-userPreviewTextContainer {
  @apply max-sm:hidden;
}

.cl-organizationSwitcherTrigger
  .cl-organizationPreview
  .cl-organizationPreviewTextContainer {
  @apply max-sm:hidden;
}

/* Shadcn Component Styles */

/* Tab */
.tab {
  @apply flex min-h-[50px] flex-1 items-center gap-3 bg-dark-2 text-light-2 data-[state=active]:bg-[#0e0e12] data-[state=active]:text-light-2 !important;
}

.no-focus {
  @apply focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 !important;
}

/* Account Profile  */
.account-form_image-label {
  @apply flex h-24 w-24 items-center justify-center rounded-full bg-dark-4 !important;
}

.account-form_image-input {
  @apply cursor-pointer border-none bg-transparent outline-none file:text-blue !important;
}

.account-form_input {
  @apply border border-dark-4 bg-dark-3 text-light-1 !important;
}

/* Comment Form */
.comment-form {
  @apply mt-10 flex items-center gap-4 border-y border-y-dark-4 py-5 max-xs:flex-col !important;
}

.comment-form_btn {
  @apply rounded-3xl bg-primary-500 px-8 py-2 !text-small-regular text-light-1 max-xs:w-full !important;
}