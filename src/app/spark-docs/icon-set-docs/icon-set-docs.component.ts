import { Component } from '@angular/core';

@Component({
  selector: 'sprk-icon-set-docs',
  template: `
    <div
      class="sprk-demo-o-ContentGrouping"
      *ngFor="let icon of icons; index as i"
    >
      <h2 class="sprk-demo-b-h2">{{ icon }}</h2>
      <sprk-icon
        iconType="{{ icon }}"
        additionalClasses=""
        idString="icon-{{ i }}-1"
      ></sprk-icon>
      <sprk-icon
        iconType="{{ icon }}"
        additionalClasses="sprk-c-Icon--l"
        idString="icon-{{ i }}-2"
      ></sprk-icon>
      <sprk-icon
        iconType="{{ icon }}"
        additionalClasses="sprk-c-Icon--xl"
        idString="icon-{{ i }}-3"
      ></sprk-icon>
      <sprk-icon
        iconType="{{ icon }}"
        additionalClasses="sprk-c-Icon--xxl"
        idString="icon-{{ i }}-4"
      ></sprk-icon>
    </div>
  `,
  styles: ['']
})
export class IconSetDocsComponent {
  constructor() {}

  icons = [
    'access',
    'amount-money',
    'application',
    'apply-now',
    'auto-loans',
    'baths',
    'beds',
    'bell',
    'bell-filled',
    'bell-filled',
    'blog',
    'calculator',
    'calendar',
    'call-team-member',
    'cash-back',
    'chat-online',
    'chat-online-filled',
    'chat-online-filled',
    'check-mark',
    'check-mark-filled',
    'check-mark-filled',
    'chevron-down',
    'chevron-down-circle',
    'chevron-down-circle',
    'chevron-down-filled',
    'chevron-down-filled',
    'chevron-left',
    'chevron-left-circle',
    'chevron-left-circle',
    'chevron-left-filled',
    'chevron-left-filled',
    'chevron-right',
    'chevron-right-circle',
    'chevron-right-circle',
    'chevron-right-filled',
    'chevron-right-filled',
    'chevron-up',
    'chevron-up-circle',
    'chevron-up-circle',
    'chevron-up-filled',
    'chevron-up-filled',
    'clock',
    'clock-filled',
    'clock-filled',
    'close',
    'close-circle',
    'close-filled',
    'close-filled',
    'cloud',
    'cloud-filled',
    'cloud-filled',
    'communication',
    'communication-filled',
    'communication-filled',
    'condo',
    'cooling',
    'credit',
    'credit-card-payoff',
    'dedicated-team',
    'desktop-computer',
    'document-review',
    'document-review-filled',
    'document-review-filled',
    'documents',
    'download',
    'download-filled',
    'download-filled',
    'editable',
    'educational-resources',
    'email',
    'email-filled',
    'exclamation',
    'exclamation-filled',
    'exclamation-filled',
    'facebook',
    'facebook',
    'feedback',
    'feedback-filled',
    'feedback-filled',
    'find-agent',
    'free',
    'heat',
    'home',
    'home-improvement',
    'home-shopping',
    'home-size',
    'information',
    'information-filled',
    'information-filled',
    'instagram',
    'instagram',
    'land',
    'landline',
    'landline-filled',
    'landline-filled',
    'laptop',
    'large-purchase',
    'linkedin',
    'linkedin',
    'lock',
    'medical-expenses',
    'menu',
    'mls',
    'mobile',
    'mortgage',
    'multi-family',
    'one-time-update',
    'organize',
    'organize-filled',
    'organize-filled',
    'our-family',
    'parking',
    'payment',
    'payment-center',
    'pinterest',
    'pinterest',
    'play',
    'plus',
    'plus-filled',
    'plus-filled',
    'prequalified',
    'prequalified-filled',
    'prequalified-filled',
    'price-per-sq-ft',
    'print',
    'question',
    'question-filled',
    'question-filled',
    'rate-shield',
    'rate-shield-filled',
    'rate-shield-filled',
    'rates',
    'recurring-update',
    'refinance',
    'reviews',
    'rocket',
    'rocket-doc',
    'same-day',
    'savings',
    'schools',
    'search',
    'secure-process',
    'settings',
    'settings-filled',
    'settings-filled',
    'single',
    'small-business',
    'snapchat',
    'snapchat',
    'technology',
    'thumbs-up',
    'townhouse',
    'trash',
    'trash-filled',
    'trash-filled',
    'twitter',
    'twitter',
    'unlock',
    'update',
    'upload',
    'user',
    'user-account',
    'verified-approval',
    'vip',
    'wifi',
    'written-check',
    'year-built',
    'youtube',
    'youtube'
  ];
}